"use client";
import React from "react";
import PricingCard from "@components/cards/pricing-card";
import data from "@/data";
import ToggleButton from "@components/buttons/toggle-button";
import { motion, Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      delay: 0.3,
      duration: 0.5,
    },
  },
};

export default function PricingList() {
  const [isMonthly, setIsMonthly] = React.useState<boolean>(true);

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="relative isolate mx-auto flex max-w-[1110px] flex-col items-center px-7 py-16 tablet:px-10 desktop:py-[120px]">
      <div className="sticky  top-[72px] z-10 flex w-full  bg-brand-white py-4 desktop:static desktop:mb-0">
        <div className="flex w-full -translate-x-4 items-center justify-center gap-8">
          <p
            className={`text-lg font-bold ${
              isMonthly && "opacity-50"
            } trans duration-100 backdrop:transition-all`}>
            Monthly
          </p>
          <ToggleButton onClick={() => setIsMonthly(!isMonthly)} />
          <p
            className={`text-lg font-bold ${
              !isMonthly && "opacity-50"
            } transition-all duration-100`}>
            year
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-12 desktop:flex-row desktop:items-center desktop:gap-8">
        {data.pricing.map((price) => {
          const { body, title, monthlyPrice, yearlyPrice } = price;
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
      </div>
    </motion.div>
  );
}
