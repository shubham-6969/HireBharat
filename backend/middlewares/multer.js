import multer from "multer";

const storage = multer.memoryStorage();

export const singleUpload = multer({storage}).single("profilePhoto")
export const multiUpload = multer({ storage }).fields([
  { name: "profilePhoto", maxCount: 1 },
  { name: "resume", maxCount: 1 },
 
]);