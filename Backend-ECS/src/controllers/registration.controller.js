import moduleModelMap from "../utils/moduleModelMap.js";

export const registerEvent = async (req, res) => {
  try {
    const { module } = req.body;

    // 1️⃣ Select correct collection
    const Model = moduleModelMap[module];
    if (!Model) {
      return res.status(400).json({ message: "Invalid module selected" });
    }

    // 2️⃣ Save data
    const registration = new Model({
      ...req.body,
      user: req.user?._id,
      paymentScreenshot: req.file?.path || null,
    });

    await registration.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
