import orderModel from "../models/orderModel.js";

// CREATE ORDER
export const createOrderController = async (req, res) => {
  try {
    const { products, amount, address } = req.body;

    const newOrder = new orderModel({
      products,
      amount,
      address,
      user: req.user._id,
      status: "Processing"
    });

    const savedOrder = await newOrder.save();

    res.status(201).send({
      success: true,
      message: "Order created successfully",
      order: savedOrder
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating order",
      error
    });
  }
};


// GET USER ORDERS
export const getUserOrdersController = async (req, res) => {
  try {

    const orders = await orderModel
      .find({ user: req.user._id })
      .populate("products")
      .populate("user", "name");

    res.status(200).send({
      success: true,
      orders
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching user orders",
      error
    });
  }
};


// GET ALL ORDERS (ADMIN)
export const getAllOrdersController = async (req, res) => {
  try {

    const orders = await orderModel
      .find({})
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      orders
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching orders",
      error
    });
  }
};


// UPDATE ORDER STATUS
export const updateOrderStatusController = async (req, res) => {
  try {

    const { orderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: "Order status updated",
      order: updatedOrder
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating order status",
      error
    });
  }
};