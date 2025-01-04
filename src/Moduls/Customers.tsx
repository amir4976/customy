// models/Customer.js
import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  nationalCode: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  phone: { type: String, required: true },
  province: { type: String, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
  fullAddress: { type: String, required: true },
    
  // Profile and Header Images
  profileImage: { 
    type: String, // URL of the profile image
    required: false 
  },
  headerImage: { 
    type: String, // URL of the header image
    required: false 
  },

  // User Activity Fields
  ordersCount: { 
    type: Number, 
    default: 0, 
    required: true 
  }, // تعداد سفارش‌ها

  // Follow functionality (optional)
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DesignerSeller', // Users this customer is following
    }
  ],

  // Favorite stickers (optional)
  favorites: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Sticker' // Favorite stickers for the customer
    }
  ],
}, { timestamps: true });

export default mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
