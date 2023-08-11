"use client";
import data from "@/data";
import {
  heroAccentVariant,
  heroTextVariant,
  heroVariant,
} from "@/src/lib/animation-variants/heroAnimationVariants";
import { HeroCard } from "@components/cards/hero-card";
import { motion } from "framer-motion";

const MotionHeroCard = motion(HeroCard);

export const PricingHeroCard = () => {
  const { title, body, image } = data.heros.pricing;

  return (
    <div className="bg-brand-black">
      <MotionHeroCard
        image={image}
        variants={heroVariant}
        initial="hidden"
        animate="visible"
        priority>
        <div className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
          <motion.span
            variants={heroAccentVariant}
            className="absolute left-8 top-0 block h-[6px] w-32 bg-brand-accent tablet:bottom-0 tablet:left-0 tablet:h-auto tablet:w-[6px]"
          />
          <motion.h1
            variants={heroTextVariant}
            className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
            {title}
          </motion.h1>
          <motion.p variants={heroTextVariant} className="text-sm opacity-60">
            {body}
          </motion.p>
        </div>
      </MotionHeroCard>
    </div>
  );
};
