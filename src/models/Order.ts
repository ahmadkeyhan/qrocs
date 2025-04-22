// import type mongoose from "mongoose"
import { Schema, model } from "mongoose"
import mongoose from "mongoose"

export interface IOrder {
  _id?: mongoose.Types.ObjectId | string
  storeName: string
  storeInstagram? : string
  ownerName: string
  phoneNumber: number
  city: string
  province: string
  plan: string
  paymantPeriod: string
  createdAt?: Date
  updatedAt?: Date
}

const orderSchema = new Schema<IOrder>(
  {
    storeName: { type: String, required: true },
    storeInstagram: { type: String },
    ownerName: {type: String, required: true},
    phoneNumber: { type: Number, required: true },
    city: {type: String, required: true},
    province: {type: String, required: true},
    plan: {type: String, required: true},
    paymantPeriod: {type: String, required: true},
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      },
    },
  },
)

export const Order = mongoose.models?.Order || model<IOrder>("Order", orderSchema)

