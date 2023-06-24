"use client";
import React from "react";
import PricingCard from "./pricing-card";
import { pricingData } from "@/data";
import ToggleButton from "../buttons/toggle-button";

export default function PricingList() {
  const [isMonthly, setIsMonthly] = React.useState<boolean>(true);

  return (
    <div className="mx-auto flex max-w-[1110px] flex-col items-center px-7 py-16 desktop:py-[120px]">
      <div className="relative flex w-full max-w-[255px] items-center justify-between desktop:-translate-x-4">
        <span className={`text-lg ${isMonthly && "font-bold"}`}>Monthly</span>
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
          <ToggleButton onClick={() => setIsMonthly(!isMonthly)} />
        </div>
        <span className={`text-lg ${!isMonthly && "font-bold"} -translate-x-8`}>
          year
        </span>
      </div>

      <div className="flex flex-col gap-6 pt-12 desktop:flex-row desktop:items-center">
        {pricingData.prices.map((price) => {
          const { body, id, title, monthlyPrice, yearlyPrice } = price;

          const isPro = title.toLocaleLowerCase() === "pro";
          const planPrice = isMonthly ? monthlyPrice : yearlyPrice;
          const paymentInterval = isMonthly ? "month" : "year";

          return (
            <PricingCard
              key={id}
              dark={isPro}
              body={body}
              title={title}
              price={planPrice}
              paymentInterval={`per ${paymentInterval}`}
            />
          );
        })}
      </div>
    </div>
  );
}
