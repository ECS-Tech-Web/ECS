import moduleModelMap from "../utils/moduleModelMap.js";

export const registerEvent = async (req, res) => {
  try {
    const { module } = req.body;

    /* ================= VALIDATION ================= */

    if (!module) {
      return res.status(400).json({
        success: false,
        message: "Module is required",
      });
    }

    // 1️⃣ Select correct collection based on module
    const Model = moduleModelMap[module];

    if (!Model) {
      return res.status(400).json({
        success: false,
        message: "Invalid module selected",
      });
    }

    /* ================= SAVE REGISTRATION ================= */

    const registration = await Model.create({
      ...req.body,               // form fields
      paymentScreenshot: req.file ? req.file.filename : null, // multer file
      // ❌ NO user field
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
};
