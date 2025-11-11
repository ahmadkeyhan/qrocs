"use server";

import connectToDatabase from "../mongodb";
import { Customer } from "@/models/Customer";

// Customer CRUD operations
export async function getCustomers() {
  try {
    await connectToDatabase();
    const orders = await Customer.find().sort({ createdAt: 1 });
    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
}

export async function getCustomerById(id: string) {
  try {
    await connectToDatabase()
    const customer = await Customer.findById(id)

    if (!customer) {
      throw new Error("Customer not found")
    }

    return JSON.parse(JSON.stringify(customer));
  } catch (error) {
    console.error(`Error fetching customer with ID ${id}:`, error)
    throw new Error("Failed to fetch customer")
  }
}

