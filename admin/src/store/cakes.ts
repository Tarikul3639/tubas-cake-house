import { ICake } from "@/types/cakes";
export const initialCakes: ICake[] = [
  {
    _id: "507f1f77bcf86cd799439011",
    name:  "Classic Chocolate Fudge Cake",
    slug: "classic-chocolate-fudge-cake",
    description:  "Indulge in layers of rich, moist chocolate cake with creamy chocolate fudge frosting.  Perfect for chocolate lovers!",
    shortDescription:  "Rich chocolate cake with fudge frosting",
    category: "Birthday",
    price: 45.99,
    discount: 5.00,
    stock: 25,
    variants: [
      { name: "Small (6 inch)", price: 45.99, stock: 10 },
      { name: "Medium (8 inch)", price: 65.99, stock: 10 },
      { name: "Large (10 inch)", price: 85.99, stock: 5 }
    ],
    isCustomizable: true,
    images: [
      "https://images.unsplash.com/photo-1602351447937-745cb720612f?auto=format&fit=crop&w=800",
      "/images/cakes/chocolate-fudge-2.jpg",
      "/images/cakes/chocolate-fudge-3.jpg"
    ],
    rating: 4.8,
    reviewCount: 156,
    salesCount: 342,
    isActive: true,
    createdAt: "2025-06-15T10:30:00.000Z",
    updatedAt: "2026-01-05T14:20:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439012",
    name: "Vanilla Bean Dream Cake",
    slug: "vanilla-bean-dream-cake",
    description: "Light and fluffy vanilla cake made with real vanilla beans, topped with smooth vanilla buttercream.",
    shortDescription: "Classic vanilla cake with buttercream",
    category: "Birthday",
    price: 42.99,
    stock: 30,
    variants: [
      { name: "Small (6 inch)", price: 42.99, stock: 12 },
      { name: "Medium (8 inch)", price: 62.99, stock: 12 },
      { name: "Large (10 inch)", price: 82.99, stock: 6 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/vanilla-dream-1.jpg",
      "/images/cakes/vanilla-dream-2.jpg"
    ],
    rating: 4.7,
    reviewCount: 203,
    salesCount: 487,
    isActive: true,
    createdAt: "2025-06-10T09:15:00.000Z",
    updatedAt: "2026-01-06T11:45:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439013",
    name: "Red Velvet Romance",
    slug: "red-velvet-romance",
    description:  "Stunning red velvet layers with tangy cream cheese frosting.  A timeless favorite for any celebration.",
    shortDescription: "Red velvet with cream cheese frosting",
    category: "Wedding",
    price:  55.99,
    discount: 10.00,
    stock: 18,
    variants: [
      { name: "2-Tier", price: 85.99, stock: 6 },
      { name: "3-Tier", price: 155.99, stock: 8 },
      { name: "4-Tier", price: 225.99, stock: 4 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/red-velvet-1.jpg",
      "/images/cakes/red-velvet-2.jpg",
      "/images/cakes/red-velvet-3.jpg"
    ],
    rating: 4.9,
    reviewCount: 178,
    salesCount: 289,
    isActive: true,
    createdAt: "2025-07-01T08:00:00.000Z",
    updatedAt: "2026-01-04T16:30:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439014",
    name: "Strawberry Shortcake Delight",
    slug: "strawberry-shortcake-delight",
    description: "Fresh strawberries layered between soft sponge cake and whipped cream.  Light and refreshing!",
    shortDescription: "Fresh strawberries with whipped cream",
    category: "Birthday",
    price: 48.99,
    stock: 22,
    variants: [
      { name: "Small (6 inch)", price: 48.99, stock: 10 },
      { name: "Medium (8 inch)", price: 68.99, stock: 8 },
      { name: "Large (10 inch)", price: 88.99, stock: 4 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/strawberry-shortcake-1.jpg",
      "/images/cakes/strawberry-shortcake-2.jpg"
    ],
    rating: 4.6,
    reviewCount: 134,
    salesCount: 256,
    isActive: true,
    createdAt: "2025-07-10T12:00:00.000Z",
    updatedAt:  "2026-01-07T09:15:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439015",
    name: "Lemon Blueberry Bliss",
    slug: "lemon-blueberry-bliss",
    description: "Zesty lemon cake studded with fresh blueberries and topped with lemon cream cheese frosting.",
    shortDescription: "Tangy lemon cake with blueberries",
    category: "Birthday",
    price: 46.99,
    stock: 20,
    isCustomizable: true,
    images: [
      "/images/cakes/lemon-blueberry-1.jpg",
      "/images/cakes/lemon-blueberry-2.jpg",
      "/images/cakes/lemon-blueberry-3.jpg"
    ],
    rating: 4.7,
    reviewCount: 98,
    salesCount: 187,
    isActive: true,
    createdAt: "2025-07-15T14:30:00.000Z",
    updatedAt: "2026-01-03T13:20:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439016",
    name: "Tiramisu Tower",
    slug: "tiramisu-tower",
    description:  "Italian-inspired coffee-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.",
    shortDescription: "Coffee-flavored Italian classic",
    category: "Anniversary",
    price: 58.99,
    discount: 8.00,
    stock: 15,
    variants: [
      { name: "Classic", price: 58.99, stock: 10 },
      { name: "Extra Coffee", price: 62.99, stock: 5 }
    ],
    isCustomizable: false,
    images: [
      "/images/cakes/tiramisu-1.jpg",
      "/images/cakes/tiramisu-2.jpg"
    ],
    rating: 4.9,
    reviewCount: 221,
    salesCount: 412,
    isActive: true,
    createdAt: "2025-07-20T10:45:00.000Z",
    updatedAt: "2026-01-06T15:00:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439017",
    name: "Carrot Cake Supreme",
    slug: "carrot-cake-supreme",
    description: "Moist carrot cake loaded with walnuts and raisins, topped with rich cream cheese frosting.",
    shortDescription: "Classic carrot cake with walnuts",
    category: "Birthday",
    price: 44.99,
    stock: 28,
    variants: [
      { name: "With Walnuts", price: 44.99, stock: 15 },
      { name: "Without Walnuts", price:  42.99, stock: 13 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/carrot-cake-1.jpg",
      "/images/cakes/carrot-cake-2.jpg"
    ],
    rating: 4.5,
    reviewCount: 167,
    salesCount: 298,
    isActive: true,
    createdAt: "2025-08-01T09:00:00.000Z",
    updatedAt: "2026-01-05T10:30:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439018",
    name: "Black Forest Paradise",
    slug: "black-forest-paradise",
    description:  "Decadent chocolate cake layered with cherry filling, whipped cream, and chocolate shavings.",
    shortDescription: "Chocolate cake with cherries and cream",
    category: "Birthday",
    price: 52.99,
    stock: 19,
    variants: [
      { name: "Small (6 inch)", price: 52.99, stock: 8 },
      { name: "Medium (8 inch)", price: 72.99, stock: 7 },
      { name: "Large (10 inch)", price: 92.99, stock: 4 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/black-forest-1.jpg",
      "/images/cakes/black-forest-2.jpg",
      "/images/cakes/black-forest-3.jpg"
    ],
    rating: 4.8,
    reviewCount: 189,
    salesCount: 356,
    isActive: true,
    createdAt: "2025-08-05T11:15:00.000Z",
    updatedAt:  "2026-01-07T12:45:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439019",
    name: "Elegant Wedding White Cake",
    slug: "elegant-wedding-white-cake",
    description: "Pure white multi-tier cake with delicate buttercream roses.  Perfect for your special day.",
    shortDescription: "Classic white wedding cake",
    category: "Wedding",
    price: 250.99,
    discount: 25.00,
    stock: 8,
    variants: [
      { name: "2-Tier", price: 180.99, stock: 3 },
      { name: "3-Tier", price: 250.99, stock: 3 },
      { name: "4-Tier", price: 350.99, stock: 2 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/wedding-white-1.jpg",
      "/images/cakes/wedding-white-2.jpg",
      "/images/cakes/wedding-white-3.jpg",
      "/images/cakes/wedding-white-4.jpg"
    ],
    rating: 5.0,
    reviewCount: 89,
    salesCount: 124,
    isActive: true,
    createdAt: "2025-08-10T08:30:00.000Z",
    updatedAt: "2026-01-02T14:00:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439020",
    name: "Cookies and Cream Explosion",
    slug: "cookies-and-cream-explosion",
    description: "Oreo lover's dream!  Chocolate cake filled with cookies and cream frosting and crushed Oreos.",
    shortDescription: "Oreo-loaded chocolate cake",
    category: "Birthday",
    price: 49.99,
    stock: 24,
    variants: [
      { name: "Regular Oreo", price: 49.99, stock: 15 },
      { name: "Double Stuff Oreo", price: 54.99, stock: 9 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/cookies-cream-1.jpg",
      "/images/cakes/cookies-cream-2.jpg"
    ],
    rating: 4.9,
    reviewCount: 267,
    salesCount: 523,
    isActive: true,
    createdAt: "2025-08-15T13:00:00.000Z",
    updatedAt: "2026-01-08T08:30:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439021",
    name: "Salted Caramel Indulgence",
    slug: "salted-caramel-indulgence",
    description: "Rich caramel cake with salted caramel buttercream, drizzled with homemade caramel sauce.",
    shortDescription: "Salted caramel perfection",
    category: "Birthday",
    price: 54.99,
    discount: 6.00,
    stock: 17,
    isCustomizable: true,
    images: [
      "/images/cakes/salted-caramel-1.jpg",
      "/images/cakes/salted-caramel-2.jpg",
      "/images/cakes/salted-caramel-3.jpg"
    ],
    rating: 4.8,
    reviewCount: 143,
    salesCount: 278,
    isActive: true,
    createdAt: "2025-08-20T10:00:00.000Z",
    updatedAt: "2026-01-04T11:15:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439022",
    name: "Coconut Cream Dream",
    slug: "coconut-cream-dream",
    description: "Light coconut cake filled with coconut cream and topped with toasted coconut flakes.",
    shortDescription: "Tropical coconut delight",
    category: "Birthday",
    price: 47.99,
    stock: 21,
    variants: [
      { name: "Classic", price: 47.99, stock: 12 },
      { name: "Pineapple Coconut", price: 52.99, stock: 9 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/coconut-cream-1.jpg",
      "/images/cakes/coconut-cream-2.jpg"
    ],
    rating: 4.6,
    reviewCount: 112,
    salesCount: 201,
    isActive: true,
    createdAt: "2025-08-25T14:45:00.000Z",
    updatedAt: "2026-01-06T09:30:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439023",
    name: "Rainbow Celebration Cake",
    slug: "rainbow-celebration-cake",
    description: "Vibrant rainbow layers covered in fluffy white buttercream.  Perfect for kids' parties!",
    shortDescription:  "Colorful rainbow layers",
    category: "Kids",
    price: 51.99,
    stock: 16,
    isCustomizable: true,
    images: [
      "/images/cakes/rainbow-1.jpg",
      "/images/cakes/rainbow-2.jpg",
      "/images/cakes/rainbow-3.jpg"
    ],
    rating: 4.9,
    reviewCount: 234,
    salesCount: 467,
    isActive: true,
    createdAt: "2025-09-01T09:30:00.000Z",
    updatedAt: "2026-01-07T15:20:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439024",
    name: "Peanut Butter Chocolate Heaven",
    slug: "peanut-butter-chocolate-heaven",
    description: "Chocolate cake with creamy peanut butter frosting and Reese's pieces.  A match made in heaven!",
    shortDescription: "Chocolate and peanut butter combo",
    category: "Birthday",
    price: 50.99,
    stock: 20,
    variants: [
      { name: "With Reese's", price: 50.99, stock: 12 },
      { name: "With Peanut Butter Cups", price: 52.99, stock: 8 }
    ],
    isCustomizable: true,
    images:  [
      "/images/cakes/pb-chocolate-1.jpg",
      "/images/cakes/pb-chocolate-2.jpg"
    ],
    rating: 4.8,
    reviewCount: 176,
    salesCount: 334,
    isActive: true,
    createdAt: "2025-09-05T11:00:00.000Z",
    updatedAt:  "2026-01-05T13:45:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439025",
    name: "Mint Chocolate Chip Cake",
    slug: "mint-chocolate-chip-cake",
    description: "Refreshing mint cake with chocolate chips, covered in mint buttercream frosting.",
    shortDescription: "Cool mint with chocolate chips",
    category: "Birthday",
    price: 46.99,
    stock: 23,
    isCustomizable: true,
    images: [
      "/images/cakes/mint-chocolate-1.jpg",
      "/images/cakes/mint-chocolate-2.jpg"
    ],
    rating: 4.5,
    reviewCount: 98,
    salesCount: 189,
    isActive: true,
    createdAt: "2025-09-10T12:30:00.000Z",
    updatedAt: "2026-01-03T10:00:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439026",
    name: "Unicorn Magic Cake",
    slug: "unicorn-magic-cake",
    description: "Whimsical pastel swirls, edible glitter, and a magical unicorn topper. Every kid's dream cake!",
    shortDescription: "Magical unicorn-themed cake",
    category: "Kids",
    price: 62.99,
    discount: 7.00,
    stock: 12,
    isCustomizable: true,
    images: [
      "/images/cakes/unicorn-1.jpg",
      "/images/cakes/unicorn-2.jpg",
      "/images/cakes/unicorn-3.jpg"
    ],
    rating: 5.0,
    reviewCount: 198,
    salesCount: 389,
    isActive: true,
    createdAt: "2025-09-15T08:15:00.000Z",
    updatedAt: "2026-01-08T07:45:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439027",
    name: "Mocha Espresso Delight",
    slug: "mocha-espresso-delight",
    description: "Coffee-infused chocolate cake with espresso buttercream.  A coffee lover's paradise!",
    shortDescription: "Rich coffee and chocolate blend",
    category: "Anniversary",
    price: 53.99,
    stock: 18,
    variants: [
      { name: "Regular Espresso", price: 53.99, stock: 10 },
      { name: "Double Shot", price: 57.99, stock: 8 }
    ],
    isCustomizable: false,
    images: [
      "/images/cakes/mocha-espresso-1.jpg",
      "/images/cakes/mocha-espresso-2.jpg"
    ],
    rating: 4.7,
    reviewCount: 145,
    salesCount: 267,
    isActive: true,
    createdAt: "2025-09-20T13:45:00.000Z",
    updatedAt: "2026-01-06T16:30:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439028",
    name: "Funfetti Birthday Bash",
    slug: "funfetti-birthday-bash",
    description: "Classic vanilla cake loaded with rainbow sprinkles inside and out. Pure celebration!",
    shortDescription: "Sprinkle-filled party cake",
    category: "Birthday",
    price: 44.99,
    stock: 27,
    isCustomizable: true,
    images: [
      "/images/cakes/funfetti-1.jpg",
      "/images/cakes/funfetti-2.jpg"
    ],
    rating: 4.8,
    reviewCount: 312,
    salesCount: 598,
    isActive: true,
    createdAt: "2025-09-25T10:20:00.000Z",
    updatedAt: "2026-01-07T11:00:00.000Z"
  },
  {
    _id:  "507f1f77bcf86cd799439029",
    name: "Raspberry White Chocolate Cake",
    slug: "raspberry-white-chocolate-cake",
    description: "Elegant white chocolate cake layered with fresh raspberry filling and white chocolate ganache.",
    shortDescription: "White chocolate with raspberry",
    category: "Wedding",
    price: 59.99,
    discount: 9.00,
    stock: 14,
    isCustomizable:  true,
    images: [
      "/images/cakes/raspberry-white-choc-1.jpg",
      "/images/cakes/raspberry-white-choc-2.jpg",
      "/images/cakes/raspberry-white-choc-3.jpg"
    ],
    rating: 4.9,
    reviewCount: 132,
    salesCount: 245,
    isActive: true,
    createdAt: "2025-10-01T09:00:00.000Z",
    updatedAt: "2026-01-04T14:15:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439030",
    name: "German Chocolate Cake",
    slug: "german-chocolate-cake",
    description: "Traditional German chocolate cake with coconut pecan frosting between each layer.",
    shortDescription: "Classic German chocolate with pecans",
    category: "Birthday",
    price: 48.99,
    stock: 19,
    variants: [
      { name: "With Pecans", price: 48.99, stock: 12 },
      { name: "Extra Coconut", price: 50.99, stock: 7 }
    ],
    isCustomizable: true,
    images: [
      "/images/cakes/german-chocolate-1.jpg",
      "/images/cakes/german-chocolate-2.jpg"
    ],
    rating: 4.7,
    reviewCount: 154,
    salesCount: 289,
    isActive: true,
    createdAt: "2025-10-05T11:30:00.000Z",
    updatedAt: "2026-01-05T09:45:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439031",
    name: "Champagne Celebration Cake",
    slug: "champagne-celebration-cake",
    description: "Sophisticated champagne-infused cake with champagne buttercream and edible gold accents.",
    shortDescription: "Elegant champagne cake",
    category:  "Anniversary",
    price: 68.99,
    discount: 10.00,
    stock: 10,
    isCustomizable: true,
    images: [
      "/images/cakes/champagne-1.jpg",
      "/images/cakes/champagne-2.jpg",
      "/images/cakes/champagne-3.jpg"
    ],
    rating: 5.0,
    reviewCount: 87,
    salesCount: 156,
    isActive: true,
    createdAt: "2025-10-10T14:00:00.000Z",
    updatedAt: "2026-01-02T12:30:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439032",
    name: "Banana Cream Pie Cake",
    slug: "banana-cream-pie-cake",
    description: "Moist banana cake with vanilla custard filling and fresh banana slices, topped with whipped cream.",
    shortDescription: "Banana cake with custard filling",
    category: "Birthday",
    price: 45.99,
    stock: 22,
    isCustomizable: true,
    images: [
      "/images/cakes/banana-cream-1.jpg",
      "/images/cakes/banana-cream-2.jpg"
    ],
    rating: 4.6,
    reviewCount: 119,
    salesCount: 223,
    isActive: true,
    createdAt: "2025-10-15T10:45:00.000Z",
    updatedAt: "2026-01-06T13:00:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439033",
    name: "Nutella Hazelnut Heaven",
    slug: "nutella-hazelnut-heaven",
    description: "Decadent chocolate hazelnut cake filled with Nutella buttercream and topped with crushed hazelnuts.",
    shortDescription: "Nutella-filled chocolate cake",
    category: "Birthday",
    price: 56.99,
    discount: 7.00,
    stock: 16,
    variants: [
      { name: "Regular Nutella", price: 56.99, stock: 10 },
      { name: "Extra Nutella", price: 61.99, stock: 6 }
    ],
    isCustomizable: true,
    images:  [
      "/images/cakes/nutella-1.jpg",
      "/images/cakes/nutella-2.jpg",
      "/images/cakes/nutella-3.jpg"
    ],
    rating:  4.9,
    reviewCount: 201,
    salesCount: 378,
    isActive: true,
    createdAt: "2025-10-20T12:15:00.000Z",
    updatedAt: "2026-01-07T14:45:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439034",
    name: "Lemon Lavender Elegance",
    slug: "lemon-lavender-elegance",
    description: "Delicate lemon cake infused with culinary lavender, topped with lemon buttercream and lavender buds.",
    shortDescription: "Sophisticated lemon lavender blend",
    category: "Wedding",
    price: 64.99,
    stock: 11,
    isCustomizable: true,
    images: [
      "/images/cakes/lemon-lavender-1.jpg",
      "/images/cakes/lemon-lavender-2.jpg"
    ],
    rating: 4.8,
    reviewCount: 76,
    salesCount: 134,
    isActive: true,
    createdAt: "2025-10-25T09:30:00.000Z",
    updatedAt: "2026-01-03T15:20:00.000Z"
  },
  {
    _id: "507f1f77bcf86cd799439035",
    name: "S'mores Campfire Cake",
    slug:  "smores-campfire-cake",
    description: "Graham cracker cake with chocolate ganache and toasted marshmallow frosting.  Campfire memories!",
    shortDescription: "S'mores-inspired delight",
    category: "Birthday",
    price: 49.99,
    stock: 20,
    isCustomizable: true,
    images: [
      "/images/cakes/smores-1.jpg",
      "/images/cakes/smores-2.jpg",
      "/images/cakes/smores-3.jpg"
    ],
    rating: 4.7,
    reviewCount: 167,
    salesCount: 312,
    isActive: true,
    createdAt: "2025-11-01T11:00:00.000Z",
    updatedAt: "2026-01-08T10:15:00.000Z"
  }
];