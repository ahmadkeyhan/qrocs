'use client'

import Order from "@/components/order/order" 
import { Suspense } from "react"
export default function OrderPage() {
    

    return (
        <Suspense>
            <Order />
        </Suspense>
    )
}