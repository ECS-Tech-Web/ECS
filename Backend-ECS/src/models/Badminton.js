import mongoose from "mongoose";
import registrationSchema from "./Registration.js";

export default mongoose.model("Badminton", registrationSchema);
