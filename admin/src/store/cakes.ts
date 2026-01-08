import { CakeProduct } from "@/types/cakes";

export const cakeProducts: CakeProduct[] = [
  {
    _id: "cake_001",
    name: "Chocolate Truffle Cake",
    slug: "chocolate-truffle-cake",
    shortDescription: "Rich chocolate truffle cake",
    description: "Premium dark chocolate truffle cake made with Belgian cocoa.",
    imageUrl: "https://images.unsplash.com/photo-1601972599720-bb0c5b1c8c99",
    galleryImages: [],
    category: "birthday",
    tags: ["chocolate", "best-seller"],

    variants: [
      {
        _id: "v1",
        label: "1 Pound",
        weightKg: 0.5,
        price: 850,
        stock: 15,
        isDefault: true,
      },
      {
        _id: "v2",
        label: "2 Pound",
        weightKg: 1,
        price: 1600,
        stock: 8,
      },
    ],

    customization: {
      allowMessage: true,
      maxMessageLength: 30,
      addons: [
        {
          _id: "a1",
          name: "Extra Chocolate",
          price: 120,
          isAvailable: true,
        },
      ],
    },

    delivery: {
      sameDayAvailable: true,
      deliveryCharge: 120,
    },

    offer: {
      type: "percentage",
      value: 10,
      isActive: true,
    },

    isFeatured: true,
    status: "active",

    rating: 4.8,
    totalReviews: 245,
    totalSold: 1200,

    seo: {
      metaTitle: "Chocolate Truffle Cake in Bangladesh",
      metaDescription: "Order premium chocolate truffle cake online.",
      keywords: ["chocolate cake", "truffle cake"],
    },

    createdAt: "2026-01-01T10:00:00Z",
    updatedAt: "2026-01-05T12:00:00Z",
  },

  {
    _id: "cake_002",
    name: "Red Velvet Cake",
    slug: "red-velvet-cake",
    shortDescription: "Soft & creamy red velvet cake",
    description: "Classic red velvet cake with cream cheese frosting.",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    galleryImages: [],
    category: "anniversary",
    tags: ["red-velvet", "popular"],

    variants: [
      {
        _id: "v1",
        label: "1 Pound",
        weightKg: 0.5,
        price: 900,
        stock: 10,
        isDefault: true,
      },
      {
        _id: "v2",
        label: "2 Pound",
        weightKg: 1,
        price: 1700,
        stock: 6,
      },
    ],

    customization: {
      allowMessage: true,
      maxMessageLength: 25,
      addons: [],
    },

    delivery: {
      sameDayAvailable: true,
      deliveryCharge: 100,
    },

    isFeatured: true,
    status: "active",

    rating: 4.6,
    totalReviews: 180,
    totalSold: 900,

    createdAt: "2026-01-02T09:30:00Z",
    updatedAt: "2026-01-04T15:00:00Z",
  },

  {
    _id: "cake_003",
    name: "Black Forest Cake",
    slug: "black-forest-cake",
    shortDescription: "Classic black forest cake",
    description: "Chocolate sponge layered with whipped cream & cherries.",
    imageUrl: "https://images.unsplash.com/photo-1542826438-8b6b6c3b1c8d",
    galleryImages: [],
    category: "birthday",
    tags: ["classic", "cherry"],

    variants: [
      {
        _id: "v1",
        label: "1 Pound",
        weightKg: 0.5,
        price: 750,
        stock: 20,
        isDefault: true,
      },
    ],

    customization: {
      allowMessage: true,
      maxMessageLength: 20,
      addons: [],
    },

    delivery: {
      sameDayAvailable: false,
      deliveryCharge: 80,
    },

    isFeatured: false,
    status: "active",

    rating: 4.4,
    totalReviews: 95,
    totalSold: 520,

    createdAt: "2026-01-01T08:00:00Z",
    updatedAt: "2026-01-03T11:20:00Z",
  },

  {
    _id: "cake_004",
    name: "Vanilla Buttercream Cake",
    slug: "vanilla-buttercream-cake",
    shortDescription: "Simple vanilla cake with buttercream",
    description: "Light vanilla sponge with smooth buttercream frosting.",
    imageUrl: "https://images.unsplash.com/photo-1602351447937-745cb720612f",
    galleryImages: [],
    category: "custom",
    tags: ["vanilla"],

    variants: [
      {
        _id: "v1",
        label: "1 Pound",
        weightKg: 0.5,
        price: 650,
        stock: 30,
        isDefault: true,
      },
    ],

    customization: {
      allowMessage: true,
      maxMessageLength: 40,
      addons: [],
    },

    delivery: {
      sameDayAvailable: true,
      deliveryCharge: 70,
    },

    isFeatured: false,
    status: "active",

    rating: 4.2,
    totalReviews: 60,
    totalSold: 300,

    createdAt: "2026-01-03T10:00:00Z",
    updatedAt: "2026-01-06T14:00:00Z",
  },
];
