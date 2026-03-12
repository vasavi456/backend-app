import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Product"
      }
    ],
    amount: Number,
    address: String,
    status: {
      type: String,
      default: "Processing"
    },
    user: {
      type: mongoose.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);