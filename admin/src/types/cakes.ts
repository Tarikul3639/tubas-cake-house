/* ======================================================
   Cake Product Types (Admin Panel – Production Ready)
   Business: Cake E-Commerce
   Database: MongoDB
   Language: TypeScript
====================================================== */

/* ---------------------------------- */
/* Common Types                        */
/* ---------------------------------- */

export type ProductStatus =
  | "active"
  | "inactive"
  | "out_of_stock";

export type DiscountType =
  | "percentage"
  | "flat";

/* ---------------------------------- */
/* Cake Variant (Size / Weight)        */
/* ---------------------------------- */

export interface CakeVariant {
  _id: string;

  label: string;          // "1 Pound", "2 Pound", "Sugar Free"
  weightKg: number;

  price: number;
  stock: number;

  isDefault?: boolean;
}

/* ---------------------------------- */
/* Extra Toppings / Add-ons            */
/* ---------------------------------- */

export interface CakeAddon {
  _id: string;

  name: string;           // "Extra Cherry"
  price: number;

  isAvailable: boolean;
}

/* ---------------------------------- */
/* Offer / Discount                    */
/* ---------------------------------- */

export interface CakeOffer {
  type: DiscountType;
  value: number;

  startDate?: string;     // ISO
  endDate?: string;       // ISO

  isActive: boolean;
}

/* ---------------------------------- */
/* Customization Options               */
/* ---------------------------------- */

export interface CakeCustomization {
  allowMessage: boolean;
  maxMessageLength: number;

  addons: CakeAddon[];
}

/* ---------------------------------- */
/* Delivery Settings                   */
/* ---------------------------------- */

export interface CakeDelivery {
  sameDayAvailable: boolean;
  deliveryCharge: number;
}

/* ---------------------------------- */
/* SEO Metadata                        */
/* ---------------------------------- */

export interface CakeSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

/* ---------------------------------- */
/* Cake Product (Main Model)           */
/* ---------------------------------- */

export interface CakeProduct {
  _id: string;

  /* Basic Information */
  name: string;
  slug: string;

  shortDescription: string;
  description: string;

  /* Media */
  imageUrl: string;
  galleryImages: string[];

  /* Classification */
  category: string;            // "birthday", "wedding", etc.
  tags: string[];

  /* Variants */
  variants: CakeVariant[];

  /* Customization */
  customization: CakeCustomization;

  /* Delivery */
  delivery: CakeDelivery;

  /* Offer */
  offer?: CakeOffer;

  /* Visibility */
  isFeatured: boolean;
  status: ProductStatus;

  /* Analytics */
  rating: number;
  totalReviews: number;
  totalSold: number;

  /* SEO */
  seo?: CakeSEO;

  /* Timestamps */
  createdAt: string;
  updatedAt: string;
}
