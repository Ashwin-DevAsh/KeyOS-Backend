import mongoose from "mongoose";
const { Schema } = mongoose;

const Device = new Schema({
  sdk: String,
  brand: String,
  model: String,
  deviceID: String,
  versionName: String,
  device: String,
});

const DeviceModel = mongoose.model("Devices", Device);
export default DeviceModel;
