"use client";
import { motion } from "framer-motion";
import data from "@/data";
import { HeroCard } from "@components/cards/hero-card";
import ArrowButton from "@components/buttons/arrow-button";
import {
  arrowButtonVariant,
  heroAccentVariant,
  heroTextContainerVariant,
  heroTextVariant,
  heroVariant,
} from "@/src/lib/animation-variants/heroAnimationVariants";

const MotionHeroCard = motion(HeroCard);
const MotionArrowButton = motion(ArrowButton);

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
          className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
          <motion.span
            variants={heroAccentVariant}
            className="absolute left-8 top-0 block h-[6px] w-32 bg-brand-accent tablet:bottom-0 tablet:left-0 tablet:h-auto tablet:w-[6px]"
          />
          <motion.h1
            variants={heroTextVariant}
            className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
            {title}
          </motion.h1>
          <motion.p
            variants={heroTextVariant}
            className="mb-6 text-sm opacity-60">
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
