"use client";
import { HeroCard } from "@/src/components/cards/hero/hero-card";
import data from "@/data";
import { motion, Variants } from "framer-motion";
import {
  heroAccentVariant,
  heroTextContainerVariant,
  heroTextVariant,
  heroVariant,
} from "@/src/lib/animation-variants/heroAnimationVariants";
import HeroAccentBar from "../cards/hero/hero-accent-bar";

const MotionHeroCard = motion(HeroCard);
const MotionHeroAccentBar = motion(HeroAccentBar);

export const FeaturesHeroCard = () => {
  const { title, body, image } = data.heros.features;

  return (
    <div className="bg-brand-black">
      <MotionHeroCard
        variants={heroVariant}
        initial="hidden"
        animate="visible"
        image={image}
        priority>
        <motion.div
          variants={heroTextContainerVariant}
          className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
          <MotionHeroAccentBar variants={heroAccentVariant} />
          <motion.h1
            variants={heroTextVariant}
            className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
            {title}
          </motion.h1>
          <motion.p variants={heroTextVariant} className="text-sm opacity-60">
            {body}
          </motion.p>
        </motion.div>
      </MotionHeroCard>
    </div>
  );
};
