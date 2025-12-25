import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    name: { type: String, required: true },
    scholarId: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    branch: { type: String, required: true },
    module: { type: String, required: true },

    teamName: String,
    participants: [String],

    paymentScreenshot: String,
  },
  { timestamps: true }
);

export default registrationSchema;
