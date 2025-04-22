"use server";

import connectToDatabase from "../mongodb";
import { Order, IOrder } from "../../models/Order";
import mongoose from "mongoose";

// Order CRUD operations
export async function getOrders() {
  try {
    await connectToDatabase();
    const orders = await Order.find().sort({ createdAt: 1 });
    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
}

export async function createOrder(orderData: IOrder) {
  try {
    await connectToDatabase();
    
    const newOrder = new Order({
      ...orderData,
      _id: new mongoose.Types.ObjectId(),
    });
    await newOrder.save();
    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    console.error("خطا در ایجاد سفارش", error);
    throw new Error("ایجاد سفارش ناموفق بود!");
  }
}

export async function deleteOrder(id: string) {
  try {
    await connectToDatabase();

      // Delete the order
      const deletedOrder = await Order.findByIdAndDelete(id)
      if (!deletedOrder) {
        throw new Error("Order not found");
      }

      return { success: true };
  } catch (error) {
    console.error("Error deleting order:", error);
    throw new Error("Failed to delete order");
  }
}
