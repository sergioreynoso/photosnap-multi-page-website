"use client";
import { motion } from "framer-motion";
import data from "@/data";
import { HeroCard } from "@/src/components/cards/hero/hero-card";
import ArrowButton from "@components/buttons/arrow-button";
import HeroAccentBar from "@components/cards/hero/hero-accent-bar";
import {
  arrowButtonVariant,
  heroAccentVariant,
  heroTextContainerVariant,
  heroTextVariant,
  heroVariant,
} from "@/src/lib/animation-variants/heroAnimationVariants";

const MotionHeroCard = motion(HeroCard);
const MotionArrowButton = motion(ArrowButton);
const MotionHeroAccentBar = motion(HeroAccentBar);

const HomeHeroCard = () => {
  const { body, image, linkLabel, title } = data.heros.home;

  return (
    <div className="bg-brand-black">
      <MotionHeroCard
        initial="hidden"
        animate="visible"
        variants={heroVariant}
        image={image}
        height="tall"
        priority>
        <motion.div
          variants={heroTextContainerVariant}
          className="relative flex translate-y-2 flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
          <MotionHeroAccentBar variants={heroAccentVariant} />
          <motion.h1
            variants={heroTextVariant()}
            className="mb-4 whitespace-pre-line text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
            {title}
          </motion.h1>
          <motion.p variants={heroTextVariant(0, 0.6)} className="mb-9 text-sm">
            {body}
          </motion.p>
          <MotionArrowButton variants={arrowButtonVariant} href={``}>
            {linkLabel}
          </MotionArrowButton>
        </motion.div>
      </MotionHeroCard>
    </div>
  );
};
export default HomeHeroCard;
