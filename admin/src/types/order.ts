// types/order.ts

/* ---------------------------------- */
/* Order & Payment Enums               */
/* ---------------------------------- */

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export type PaymentStatus =
  | "paid"
  | "unpaid"
  | "partial"
  | "refunded";

export type PaymentMethod =
  | "bkash"
  | "nagad"
  | "cod"
  | "card";

/* ---------------------------------- */
/* Order Item                          */
/* ---------------------------------- */

export interface OrderItem {
  _id: string;                 // MongoDB sub-document id

  productId: string;           // product snapshot reference
  name: string;

  variant?: {
    label: string;             // "2lb", "Sugar Free"
    value?: string;
  };

  unitPrice: number;
  quantity: number;
  totalPrice: number;

  image: string;               // product snapshot image
  sku?: string;
}

/* ---------------------------------- */
/* Payment Information                 */
/* ---------------------------------- */

export interface PaymentInfo {
  _id: string;                 // MongoDB embedded id

  method: PaymentMethod;
  status: PaymentStatus;

  subTotal: number;
  deliveryCharge: number;
  discount: number;
  totalAmount: number;

  paidAmount?: number;
  dueAmount?: number;

  transactionId?: string;
  paymentReference?: string;

  gateway?: "bkash" | "nagad" | "sslcommerz" | "stripe";
  currency?: "BDT" | "USD";

  failureReason?: string;
  retryCount?: number;

  paidAt?: string;

  refund?: {
    amount: number;
    reason?: string;
    refundedAt: string;
    refundTransactionId?: string;
  };
}

/* ---------------------------------- */
/* Customer Information                */
/* ---------------------------------- */

export interface CustomerInfo {
  _id: string;                 // MongoDB embedded id

  name: string;
  email: string;
  phone: string;

  imageUrl?: string;           // customer profile image URL
  fullAddress: string;
}

/* ---------------------------------- */
/* Order Data                          */
/* ---------------------------------- */

export interface OrderData {
  _id: string;                 // MongoDB order id
  orderId: string;             // e.g. TCH-2026-001

  customer: CustomerInfo;
  items: OrderItem[];

  pricing: {
    subTotal: number;
    deliveryCharge: number;
    discount: number;
    totalAmount: number;
  };

  payment: PaymentInfo;

  status: OrderStatus;

  timeline: {
    orderedAt: string;
    processedAt?: string;
    shippedAt?: string;
    deliveredAt?: string;
    cancelledAt?: string;
  };

  notes?: {
    customer?: string;
    admin?: string;
  };

  createdAt: string;
  updatedAt: string;
}
