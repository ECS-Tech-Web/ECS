import mongoose from "mongoose";
import registrationSchema from "./Registration.js";

const modelsCache = {};

export const getRegistrationModel = (moduleName) => {
  // sanitize collection name
  const collectionName = moduleName
    .toLowerCase()
    .replace(/\s+/g, "_"); // "IPL Auction" → "ipl_auction"

  if (!modelsCache[collectionName]) {
    modelsCache[collectionName] = mongoose.model(
      collectionName,
      registrationSchema,
      collectionName // force collection name
    );
  }

  return modelsCache[collectionName];
};
