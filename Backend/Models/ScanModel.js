import mongoose from "mongoose";

const scanSchema = mongoose.Schema({
  domain: {
    type: String,
    required: [true, "Domain is required"],
    unique: true,
  },
  result: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  timestamps: true,
});

//create model
const scan = mongoose.model("scan", scanSchema);
export default scan;
