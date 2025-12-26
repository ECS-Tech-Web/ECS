import express from "express";
import multer from "multer";
import { getRegistrationModel } from "../models/registration.model.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post(
  "/",
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

      // 🔥 Get model dynamically based on module
      const Registration = getRegistrationModel(module);

      const registration = await Registration.create({
        ...req.body,
        paymentScreenshot: req.file ? req.file.filename : null,
      });

      return res.status(201).json({
        success: true,
        message: "Registration successful",
        registration,
      });
    } catch (error) {
      console.error("Registration Error:", error);

      return res.status(500).json({
        success: false,
        message: error.message || "Internal Server Error",
      });
    }
  }
);

export default router;
