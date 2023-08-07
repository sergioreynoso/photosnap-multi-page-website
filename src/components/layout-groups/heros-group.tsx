"use client";
import data from "@/data";
import { HeroCard } from "../cards/hero-card";
import ArrowButton from "../buttons/arrow-button";
import { motion, Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeInOut",
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const arrowButtonVariant: Variants = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

type Props = {
  limit?: number;
};

export default function HerosGroup({ limit = 4 }: Props) {
  const MotionArrowButton = motion(ArrowButton);

  return (
    <>
      {data.promos.map((promo, index) => {
        const { image, title, body, linkLabel, route } = promo;
        const MotionHeroCard = motion(HeroCard);

        if (index + 1 <= limit)
          return (
            <div key={index} className={`bg-brand-white`}>
              <MotionHeroCard
                key={index}
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                image={image}
                theme="white"
                height="tall"
                textPosition={index % 2 === 0 ? "on-right" : "on-left"}>
                <div className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
                  <motion.h2
                    variants={childVariant}
                    className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
                    {title}
                  </motion.h2>
                  <motion.p
                    variants={childVariant}
                    className="text-sm opacity-60">
                    {body}
                  </motion.p>
                  <MotionArrowButton
                    variants={arrowButtonVariant}
                    href={`/${route}`}>
                    {linkLabel}
                  </MotionArrowButton>
                </div>
              </MotionHeroCard>
            </div>
          );
      })}
    </>
  );
}
