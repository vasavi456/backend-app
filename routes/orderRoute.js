import express from "express";
import {
  createOrderController,
  getUserOrdersController,
  getAllOrdersController,
  updateOrderStatusController
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/create-order", createOrderController);
router.get("/user-orders", getUserOrdersController);
router.get("/all-orders", getAllOrdersController);
router.put("/update-order/:orderId", updateOrderStatusController);

export default router;