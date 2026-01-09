"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ICake } from "@/types/cakes";
import { initialCakes as cakeProducts } from "@/store/cakes";

// Import all section components
import HeaderSection from "./_components/Header";
import BasicInfoSection from "./_components/BasicInfo";
import PricingInventorySection from "./_components/PricingInventory";
import VariantsMatrixSection from "./_components/VariantsMatrix";
import MediaManagementSection from "./_components/MediaManagement";
import SettingsCardSection from "./_components/SettingsCard";
import QuickLogisticsSection from "./_components/QuickLogistics";
import CakeNotFound from "./_components/CakeNotFound";
import { LoadingState } from "./_components/LoadingState";

const BLANK_CAKE: Partial<ICake> = {
  name: "",
  slug: "",
  description: "",
  shortDescription: "",
  category: "Birthday",
  price: 0,
  discount: 0,
  stock: 0,
  images: [],
  isCustomizable: false,
  isActive: true,
  variants: [],
};

export default function CakeEditPage() {
  const params = useParams();
  const _id = params._id as string;

  // Check if edit mode or new cake
  const isEditMode = Boolean(_id && _id !== "new");

  const [cake, setCake] = useState<ICake | null>(null);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    if (isEditMode) {
      // Edit Mode: Data Fetching from local store (simulate fetch)
      const foundProduct = cakeProducts.find((p) => p._id === _id);
      if (foundProduct) {
        setCake(foundProduct as ICake);
      }
      setIsLoading(false);
    } else {
      // Add Mode: Initialize Blank Cake
      setCake(BLANK_CAKE as ICake);
      setIsLoading(false);
    }
  }, [_id, isEditMode]);

  const handleUpdate = (key: keyof ICake, value: any) => {
    if (!cake) return;
    setCake({ ...cake, [key]: value });
  };

  const handleSave = async () => {
    if (isEditMode) {
      console.log("Updating existing cake...", cake);
      // API call to PUT /api/cakes/[id]
    } else {
      console.log("Creating new cake...", cake);
      // API call to POST /api/cakes
    }
  };
  

  if (isLoading) return <LoadingState />;

  if (!cake) return <CakeNotFound />;

  return (
    <div className="min-h-screen w-full pb-24 font-sans text-slate-900">
      <HeaderSection cake={cake} isEditMode={isEditMode} onSave={handleSave} />

      <main className="w-full mx-auto mt-8 grid grid-cols-12 gap-8">
        {/* LEFT COLUMN */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <BasicInfoSection cake={cake} onUpdate={handleUpdate} />
          <PricingInventorySection cake={cake} onUpdate={handleUpdate} />
          <VariantsMatrixSection cake={cake} onUpdate={handleUpdate} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <MediaManagementSection cake={cake} onUpdate={handleUpdate} />
          <SettingsCardSection cake={cake} onUpdate={handleUpdate} />
          <QuickLogisticsSection cake={cake} />
        </div>
      </main>
    </div>
  );
}
