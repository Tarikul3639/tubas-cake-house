"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { ICustomer } from "@/types/customer";
import { customers } from "@/store/customers";

// Import section components
import HeaderSection from "./_components/HeaderSection";
import IdentityMatrix from "./_components/IdentityMatrix";
import LogisticsDetailsSection from "./_components/LogisticsDetailsSection";
import AdministrativeNotesSection from "./_components/AdministrativeNotesSection";
import SecurityGuardrailsCard from "./_components/SecurityGuardrailsCard";
import LoyaltyTierCard from "./_components/LoyaltyTierCard";
import RevenueMetricsCard from "./_components/RevenueMetricsCard";

export default function CustomerEditPage() {
  const params = useParams();

  const customerData = customers.find((c) => c._id === params._id);
  const [customer, setCustomer] = useState<ICustomer>(
    customerData || ({} as ICustomer)
  );

  // Input Change Handler
  const handleChange = (field: keyof ICustomer, value: any) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-350 mx-auto space-y-8 pb-20">
      <HeaderSection customer={customer} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: Forms (Identity & Logistics) */}
        <div className="lg:col-span-8 space-y-8">
          <IdentityMatrix customer={customer} onChange={handleChange} />
          <LogisticsDetailsSection customer={customer} onChange={handleChange} />
          <AdministrativeNotesSection customer={customer} onChange={handleChange} />
        </div>

        {/* RIGHT COLUMN: Metrics & Guardrails */}
        <div className="lg:col-span-4 space-y-8">
          <SecurityGuardrailsCard customer={customer} onChange={handleChange} />
          <LoyaltyTierCard customer={customer} onChange={handleChange} />
          <RevenueMetricsCard customer={customer} />
        </div>
      </div>
    </div>
  );
}