import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    // ❌ NO AUTH → user must be optional
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    scholarId: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    branch: {
      type: String,
      required: true,
      enum: ["CSE", "ECE", "ME", "EE", "CE", "EIE"],
    },

    module: {
      type: String,
      required: true,
      index: true,
    },

    // TEAM FIELDS (optional)
    teamName: {
      type: String,
      trim: true,
    },

    participants: {
      type: [String],
      default: [],
    },

    // ✅ FIXED: Cloudinary-friendly
    paymentScreenshot: {
      url: {
        type: String,
        default: null,
      },
      publicId: {
        type: String,
        default: null,
      },
    },
  },
  { timestamps: true }
);

export default registrationSchema;
