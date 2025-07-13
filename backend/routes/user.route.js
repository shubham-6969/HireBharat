import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { multiUpload, singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .post(isAuthenticated, multiUpload, updateProfile);

// test route
  router.route("/test").get((req, res) => {
  console.log("Cookies:", req.cookies); 
  res.json({ message: "Cookies logged" });
});

export default router;
