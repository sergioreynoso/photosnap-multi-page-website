"use client";
import React from "react";
import PricingCard from "../cards/pricing-card";
import { pricingData } from "@/data";
import ToggleButton from "../buttons/toggle-button";
import { AnimatePresence } from "framer-motion";

export default function PricingList() {
  const [isMonthly, setIsMonthly] = React.useState<boolean>(true);

  return (
    <div className="relative mx-auto flex max-w-[1110px] flex-col items-center px-7 py-16 tablet:px-10 desktop:py-[120px]">
      <div className="sticky top-[72px] z-[2] flex w-full items-center justify-center bg-brand-white py-4 desktop:static desktop:mb-0 desktop:-translate-x-4">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          <ToggleButton onClick={() => setIsMonthly(!isMonthly)} />
        </div>
        <div className="flex w-full max-w-[255px] justify-between">
          <span
            className={`text-lg ${
              isMonthly && "-translate-x-[3px] font-bold"
            } trans duration-100 backdrop:transition-all`}>
            Monthly
          </span>
          <span
            className={`text-lg ${
              !isMonthly && "font-bold"
            } -translate-x-8 transition-all duration-100`}>
            year
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-12 desktop:flex-row desktop:items-center desktop:gap-8">
        <AnimatePresence mode="wait" initial={false}>
          {pricingData.prices.map((price) => {
            const { body, id, title, monthlyPrice, yearlyPrice } = price;
            const isPro = title.toLocaleLowerCase() === "pro";
            const planPrice = isMonthly ? monthlyPrice : yearlyPrice;
            const paymentInterval = isMonthly ? "month" : "year";
            return (
              <PricingCard
                key={planPrice}
                dark={isPro}
                body={body}
                title={title}
                price={planPrice}
                paymentInterval={`per ${paymentInterval}`}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
