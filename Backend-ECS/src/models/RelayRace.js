import mongoose from "mongoose";
import registrationSchema from "./Registration.js";

export default mongoose.model("RelayRace", registrationSchema);