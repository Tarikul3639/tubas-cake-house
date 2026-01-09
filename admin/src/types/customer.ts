// ----------------------------
// Customer Type (Admin Panel)
// ----------------------------
export type ICustomer = {
  _id: string; // MongoDB ObjectId as string
  name: string; // Full name
  profilePic?: string; // URL to customer's avatar / photo
  email: string; // Email address
  phone?: string; // Optional phone number
  address?: string; // Optional full address
  city?: string; // Optional city
  state?: string; // Optional state / region
  country?: string; // Optional country
  postalCode?: string; // Optional ZIP / postal code

  createdAt: string; // Customer registration date
  updatedAt: string; // Last profile update

  // Admin Metrics
  totalOrders?: number; // Total number of orders
  totalSpent?: number; // Total amount spent
  lastOrderDate?: string; // Date of last order

  // Loyalty
  loyaltyPoints?: number; // Earned points
  membershipTier?: "Silver" | "Gold" | "Platinum"; // Tier based on points

  // Account Status
  isActive: boolean; // Active / inactive customer (full account block)
  notes?: string; // Admin notes about customer
  restrictedUntil?: string; // Optional: temporary block end date (ISO string)
};
