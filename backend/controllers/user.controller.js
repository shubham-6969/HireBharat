import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";

import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    const file = req.file

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    
    // Role-based check: Admin must upload profile photo
    if (role === "admin" && !file) {
      return res.status(400).json({
        message: "Admin must upload a profile photo",
        success: false,
      });
    }
    
    let profilePhotoUrl = undefined;
    let cloudResponse = null;

    if(file) {
      const fileUri = getDataUri(file);
      cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "raw",
      });
    }
  
    if (!cloudResponse?.secure_url) {
      return res.status(500).json({
        message: "Failed to upload profile photo",
        success: false,
      });
    }
  
    profilePhotoUrl = cloudResponse.secure_url;

    // check existing user

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user.. 

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: profilePhotoUrl,
      },
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Login

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    // check role is correct or not
    if (role != user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role",
        success: false,
      });
    }
    //console.log("SECRET_KEY:", process.env.SECRET_KEY)
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    //Store JWT in cookies
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "None",
        secure: true,
      })
      .json({ message: `Wellcome back ${user.fullname}`, user, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Successfully logged out",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const userId = req.id;

    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    // Split skills if provided
    if (skills) {
      user.profile.skills = skills.split(",");
    }

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;

    //  Handle multiple file uploads:
    const resumeFile = req.files?.resume?.[0];
    const photoFile = req.files?.profilePhoto?.[0];

    if (resumeFile) {
      const fileUri = getDataUri(resumeFile);
      const upload = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "raw",
        format: "pdf",
      });
      //  console.log("Cloudinary Reseponse:", upload); // debug line 
      if(!upload?.secure_url) {
        return res.status(500).json({
          message: "Failed to upload resume",
          success: false,
        })
      }
      user.profile.resume = upload.secure_url;
      user.profile.resumeOriginalName = resumeFile.originalname;
    }

    if (photoFile) {
      const fileUri = getDataUri(photoFile);
      const upload = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "image",
      });
      user.profile.profilePhoto = upload.secure_url;
    }

    await user.save();

    // Return updated user object
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Something went wrong", success: false });
  }
};
