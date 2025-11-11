"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCustomers } from "@/lib/data/customerData";
import { ICustomer } from "@/models/Customer"
import Customer from "./customer";


type Customer = Omit<ICustomer,"createdAt" | "updatedAt">

export default function Customers() {
    const [Customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        const loadCustomers = async () => {
            const data = await getCustomers()
            setCustomers(data)
        };

        loadCustomers();
    },[]);

    return (
        <div className="relative overflow-clip grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full p-4 bg-subtext text-background">
          <div className="flex justify-center">
            <h2 className="text-3xl">مشتریان کرِدیت</h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Customers.map((cus, index) => {
              return (
                <Customer cus={cus} key={index}/>
              )
            })}
          </div>
        </div>
      );
}