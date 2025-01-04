// models/DesignerSeller.js
import mongoose from "mongoose";

const DesignerSellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  nationalCode: { type: String, required: true, unique: true },
  education: { type: String, required: true },
  job: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  storeName: { type: String, required: true },
  instaPage: { type: String, required: false },
  shabaCode: { type: String, required: true },
  workExamples: {
    type: [String], // Stickers chosen by the user
    required: false,
    validate: [arrayLimit, 'You must provide exactly 3 images for work examples'],
  },
  phone: { type: String, required: true },
  storePhoneNumber: { type: String, required: false },
  province: { type: String, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
  fullAddress: { type: String, required: true },
  gallery: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Sticker' // Reference to the Sticker catalog
    }
  ], // Array of stickers in user's gallery

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
  designsCreated: { 
    type: Number, 
    default: 0, 
    required: true 
  }, // تعداد طرح ها طراحی شده

  ordersCount: { 
    type: Number, 
    default: 0, 
    required: true 
  }, // تعداد سفارش ها

  favorites: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Sticker' // Reference to favorite stickers
    }
  ], // علاقه مندی (User's favorite stickers)

  deliveredOrders: { 
    type: Number, 
    default: 0, 
    required: true 
  }, // تحویل شده (Number of delivered orders)

  currentOrders: { 
    type: Number, 
    default: 0, 
    required: true 
  }, // سفارش جاری (Number of current orders)

  returnedOrders: { 
    type: Number, 
    default: 0, 
    required: true 
  }, // مرجوع شده (Number of returned orders)

  canceledOrders: { 
    type: Number, 
    default: 0, 
    required: true 
  }, // لغو شده (Number of canceled orders)

  // Follow / Followers functionality
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DesignerSeller', // Reference to other DesignerSeller (who is being followed)
    }
  ], // Users this user is following

  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'DesignerSeller', // Reference to DesignerSeller (who follows the user)
    }
  ], // Users following this user
}, { timestamps: true });

// Custom validation function to ensure exactly 3 work examples
function arrayLimit(val) {
  return val.length === 3;
}

export default mongoose.models.DesignerSeller || mongoose.model("DesignerSeller", DesignerSellerSchema);
