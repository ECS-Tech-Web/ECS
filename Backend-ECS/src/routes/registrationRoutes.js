import express from "express";
import multer from "multer";
import { verifyJWT } from "../Middlewares/auth.middlewares.js";
import { getRegistrationModel } from "../models/registration.model.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({ storage });

router.post(
  "/",
  verifyJWT,
  upload.single("paymentScreenshot"),
  async (req, res) => {
    try {
      const { module } = req.body;

      if (!module) {
        return res.status(400).json({
          success: false,
          message: "Module is required",
        });
      }

      // 🔥 get model based on module
      const Registration = getRegistrationModel(module);

      const registration = await Registration.create({
        user: req.user._id,
        ...req.body,
        paymentScreenshot: req.file?.filename || "",
      });

      res.status(201).json({
        success: true,
        registration,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

export default router;
