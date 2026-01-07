import { OrderData, PaymentMethod, PaymentStatus } from "@/types/order";

export const ordersMockData: OrderData[] = [
  {
    _id: "order_001",
    orderId: "TCH-2026-001",
    customer: {
      _id: "cust_001",
      name: "Rahim Uddin",
      email: "rahim@gmail.com",
      phone: "01710000001",
      imageUrl: "https://i.pravatar.cc/150?img=1",
      fullAddress: "House 12, Road 5, Dhanmondi, Dhaka"
    },
    items: [
      {
        _id: "item_001",
        productId: "prod_001",
        name: "Chocolate Fudge Cake",
        variant: { label: "2lb" },
        unitPrice: 1200,
        quantity: 1,
        totalPrice: 1200,
        image: "https://picsum.photos/200?cake=1"
      },
      {
        _id: "item_005",
        productId: "prod_005",
        name: "Lemon Tart",
        variant: { label: "1lb" },
        unitPrice: 800,
        quantity: 1,
        totalPrice: 800,
        image: "https://picsum.photos/200?cake=5"
      }
    ],
    pricing: {
      subTotal: 2000,
      deliveryCharge: 100,
      discount: 0,
      totalAmount: 2100
    },
    payment: {
      _id: "pay_001",
      method: "bkash",
      status: "paid",
      subTotal: 1200,
      deliveryCharge: 100,
      discount: 0,
      totalAmount: 1300,
      paidAmount: 1300,
      transactionId: "BKASH12345",
      gateway: "bkash",
      currency: "BDT",
      paidAt: "2026-01-01T10:30:00Z"
    },
    status: "delivered",
    timeline: {
      orderedAt: "2026-01-01T09:00:00Z",
      processedAt: "2026-01-01T09:30:00Z",
      shippedAt: "2026-01-01T12:00:00Z",
      deliveredAt: "2026-01-01T15:00:00Z"
    },
    createdAt: "2026-01-01T09:00:00Z",
    updatedAt: "2026-01-01T15:00:00Z"
  },

  {
    _id: "order_002",
    orderId: "TCH-2026-002",
    customer: {
      _id: "cust_002",
      name: "Sadia Islam",
      email: "sadia@gmail.com",
      phone: "01710000002",
      imageUrl: "https://i.pravatar.cc/150?img=2",
      fullAddress: "Mirpur 10, Dhaka"
    },
    items: [
      {
        _id: "item_002",
        productId: "prod_002",
        name: "Red Velvet Cake",
        variant: { label: "1lb" },
        unitPrice: 900,
        quantity: 1,
        totalPrice: 900,
        image: "https://picsum.photos/200?cake=2"
      }
    ],
    pricing: {
      subTotal: 900,
      deliveryCharge: 80,
      discount: 50,
      totalAmount: 930
    },
    payment: {
      _id: "pay_002",
      method: "cod",
      status: "unpaid",
      subTotal: 900,
      deliveryCharge: 80,
      discount: 50,
      totalAmount: 930,
      dueAmount: 930
    },
    status: "processing",
    timeline: {
      orderedAt: "2026-01-02T11:00:00Z"
    },
    createdAt: "2026-01-02T11:00:00Z",
    updatedAt: "2026-01-02T11:00:00Z"
  },

  {
    _id: "order_003",
    orderId: "TCH-2026-003",
    customer: {
      _id: "cust_003",
      name: "Tanvir Hasan",
      email: "tanvir@gmail.com",
      phone: "01710000003",
      imageUrl: "https://i.pravatar.cc/150?img=3",
      fullAddress: "Chashara, Narayanganj"
    },
    items: [
      {
        _id: "item_003",
        productId: "prod_003",
        name: "Black Forest Cake",
        variant: { label: "Sugar Free" },
        unitPrice: 1500,
        quantity: 2,
        totalPrice: 3000,
        image: "https://picsum.photos/200?cake=3"
      }
    ],
    pricing: {
      subTotal: 3000,
      deliveryCharge: 150,
      discount: 200,
      totalAmount: 2950
    },
    payment: {
      _id: "pay_003",
      method: "nagad",
      status: "partial",
      subTotal: 3000,
      deliveryCharge: 150,
      discount: 200,
      totalAmount: 2950,
      paidAmount: 1500,
      dueAmount: 1450,
      transactionId: "NAGAD9988",
      gateway: "nagad",
      currency: "BDT"
    },
    status: "shipped",
    timeline: {
      orderedAt: "2026-01-03T08:00:00Z",
      shippedAt: "2026-01-03T14:00:00Z"
    },
    createdAt: "2026-01-03T08:00:00Z",
    updatedAt: "2026-01-03T14:00:00Z"
  },

  {
    _id: "order_004",
    orderId: "TCH-2026-004",
    customer: {
      _id: "cust_004",
      name: "Imran Hossain",
      email: "imran@gmail.com",
      phone: "01710000004",
      imageUrl: "https://i.pravatar.cc/150?img=4",
      fullAddress: "Bashundhara, Dhaka"
    },
    items: [
      {
        _id: "item_004",
        productId: "prod_004",
        name: "Vanilla Cake",
        variant: { label: "2lb" },
        unitPrice: 1000,
        quantity: 1,
        totalPrice: 1000,
        image: "https://picsum.photos/200?cake=4"
      }
    ],
    pricing: {
      subTotal: 1000,
      deliveryCharge: 100,
      discount: 0,
      totalAmount: 1100
    },
    payment: {
      _id: "pay_004",
      method: "card",
      status: "refunded",
      subTotal: 1000,
      deliveryCharge: 100,
      discount: 0,
      totalAmount: 1100,
      paidAmount: 1100,
      refund: {
        amount: 1100,
        refundedAt: "2026-01-04T18:00:00Z",
        refundTransactionId: "REF1234"
      }
    },
    status: "cancelled",
    timeline: {
      orderedAt: "2026-01-04T10:00:00Z",
      cancelledAt: "2026-01-04T17:00:00Z"
    },
    createdAt: "2026-01-04T10:00:00Z",
    updatedAt: "2026-01-04T18:00:00Z"
  }
];
