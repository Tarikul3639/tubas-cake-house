
// ----------------------------
// Category Type (Frontend)
// ----------------------------
export type ICategory =
  | "Birthday"
  | "Wedding"
  | "Anniversary"
  | "Graduation"
  | "Baby Shower"
  | "Holiday"
  | "Custom"
  | "Kids"
  | string;

// ----------------------------
// Variant Type (Frontend)
// ----------------------------
export type IVariant = {
  name: string;       // Variant name, e.g., Chocolate, Vanilla
  price: number;      // Variant price
  stock: number;      // Variant stock
};

// ----------------------------
// Cake Product Type (Frontend)
// ----------------------------
export type ICake = {
  _id: string;                // MongoDB ObjectId as string
  name: string;               // Cake name
  slug: string;               // URL-friendly name
  description: string;        // Full description
  shortDescription: string;   // Short preview description
  category: ICategory;           // Cake category: Birthday, Wedding, etc.

  price: number;              // Base price
  discount?: number;          // Optional e.g., 10 means 10% off

  stock: number;              // Total stock available
  variants?: IVariant[];       // Optional variants (flavor, size)
  isCustomizable: boolean;    // Can user add message / special design

  images: string[];           // Main image + gallery

  rating?: number;            // Average rating (0-5)
  reviewCount?: number;       // Total number of reviews
  salesCount?: number;        // Total sold quantity

  isActive: boolean;          // Active / inactive product
  createdAt: string;          // Date as ISO string
  updatedAt: string;          // Date as ISO string
};
