"use client";
import React, { useMemo, useState } from "react";
import { customers } from "@/store/customers";
import { ICustomer } from "@/types/customer";
import { motion } from "framer-motion";

// Import components
import HeaderSection from "./_components/HeaderSection";
import SearchTierSection from "./_components/SearchTierSection";
import TableHeader from "./_components/TableHeader";
import IdentityColumn from "./_components/IdentityColumn";
import LoyaltyStatusColumn from "./_components/LoyaltyStatusColumn";
import FinancialHistoryColumn from "./_components/FinancialHistoryColumn";
import ActionsColumn from "./_components/ActionsColumn";
import TableFooter from "./_components/TableFooter";

export default function CustomersPage() {
  // Handler for search input
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCustomers = useMemo(
    () =>
      customers.filter(
        (customer) =>
          customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          customer._id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          customer.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );
  const [numberOfPlatinumCustomers, setNumberOfPlatinumCustomers] = useState(
    customers.filter((c) => c.membershipTier === "Platinum").length
  );
  return (
    <div className="space-y-8 pb-12">
      <HeaderSection />
      <SearchTierSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        numberOfPlatinumCustomers={numberOfPlatinumCustomers}
      />
      {/* Main Data Table */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <TableHeader />
            <tbody className="divide-y divide-slate-50">
              {filteredCustomers.map((user: ICustomer, index: number) => (
                <motion.tr
                  key={user._id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group hover:bg-pink-50/20 transition-all duration-300 cursor-pointer"
                >
                  <IdentityColumn user={user} />
                  <LoyaltyStatusColumn user={user} />
                  <FinancialHistoryColumn user={user} />
                  <ActionsColumn user={user} />
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <TableFooter totalCustomers={filteredCustomers.length} />
      </div>
    </div>
  );
}
