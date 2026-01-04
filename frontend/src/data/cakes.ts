import { StaticImageData } from "next/image";
import cake1 from "@/app/assets/cakes/cake (5).jpg";
import cake2 from "@/app/assets/cakes/cake (6).jpg";
import cake3 from "@/app/assets/cakes/cake (7).jpg";
import cake4 from "@/app/assets/cakes/cake (4).jpg";

export interface Cake {
  _id: string;
  name: string;
  price: number;
  rating: number;
  badge: string;      // এটা UI তে ব্যাজ হিসেবে দেখাবে
  category: string;   // এটা দিয়ে আমরা মেইন ফিল্টারিং করবো (যেমন: Custom, Bestseller)
  weight: string;     // ওজন ফিল্টারের জন্য
  imageUrl: StaticImageData;
  isLoved?: boolean;
  isInCart?: boolean;
}

export const initialCakes: Cake[] = [
  {
    _id: "1",
    name: "Midnight Chocolate Truffle",
    price: 45.0,
    rating: 4.9,
    badge: "Bestseller",
    category: "Bestseller",
    weight: "2 Lbs",
    imageUrl: cake1,
    isLoved: true,
    isInCart: false,
  },
  {
    _id: "2",
    name: "Red Velvet Romance",
    price: 38.5,
    rating: 4.8,
    badge: "Trending",
    category: "Trending",
    weight: "1 Lbs",
    imageUrl: cake2,
    isLoved: false,
    isInCart: true,
  },
  {
    _id: "3",
    name: "Vanilla Bean Dream",
    price: 32.0,
    rating: 4.7,
    badge: "Classic",
    category: "Classic",
    weight: "1 Lbs",
    imageUrl: cake3,
    isLoved: true,
    isInCart: false,
  },
  {
    _id: "4",
    name: "Strawberry Cream Bliss",
    price: 42.0,
    rating: 5.0,
    badge: "New",
    category: "New",
    weight: "2 Lbs",
    imageUrl: cake4,
    isLoved: false,
    isInCart: true,
  },
  {
    _id: "5",
    name: "Golden Floral Tier",
    price: 120.0,
    rating: 4.9,
    badge: "Custom",
    category: "Custom",
    weight: "5 Lbs",
    imageUrl: cake1, // আপনার কাছে কাস্টম কেকের ছবি থাকলে সেটা এখানে দিবেন
    isLoved: false,
    isInCart: false,
  },
  {
    _id: "6",
    name: "Lemon Zest Delight",
    price: 36.0,
    rating: 4.6,
    badge: "Popular",
    category: "Classic",
    weight: "1 Lbs",
    imageUrl: cake2,
    isLoved: false,
    isInCart: false,
  },
  {
    _id: "7",
    name: "Dreamy Wedding White",
    price: 150.0,
    rating: 5.0,
    badge: "Special",
    category: "Custom",
    weight: "5 Lbs",
    imageUrl: cake3,
    isLoved: true,
    isInCart: false,
  },
  {
    _id: "8",
    name: "Galaxy Dark Fantasy",
    price: 55.0,
    rating: 4.8,
    badge: "Limited",
    category: "Trending",
    weight: "2 Lbs",
    imageUrl: cake4,
    isLoved: false,
    isInCart: false,
  }
];