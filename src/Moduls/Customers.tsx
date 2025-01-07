// models/Customer.js
import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },

    zipCode: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: false },
    phone: { type: String, required: true },
    province: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
    education: { type: String, required: true },
    job: { type: String, required: true },
    optionalPhone: { type: String, required: false },
    address: { type: String, required: true },
    token: { type: String, required: true },
    // Profile and Header Images
    profileImage: {
      type: String, // URL of the profile image
      required: false,
    },
    headerImage: {
      type: String, // URL of the header image
      required: false,
    },

    // User Activity Fields
    ordersCount: {
      type: Number,
      default: 0,
      required: true,
    }, // تعداد سفارش‌ها

    // Follow functionality (optional)
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DesignerSeller", // Users this customer is following
      },
    ],

    // Favorite stickers (optional)
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sticker", // Favorite stickers for the customer
      },
    ],
  },
  { timestamps: true }
);

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
export default Customer;
