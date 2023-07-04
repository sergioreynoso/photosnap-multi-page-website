"use client";
import { pricingData } from "@/data";
import { HeroCard } from "../cards/hero-card";
import { motion, Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
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

export const PricingHeroCard = () => {
  const { title, body, image } = pricingData.hero;
  const MotionHeroCard = motion(HeroCard);

  return (
    <div className="bg-brand-black">
      <MotionHeroCard
        image={image}
        accent
        variants={containerVariant}
        initial="hidden"
        animate="visible">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-5">
          <motion.h1
            variants={childVariant}
            className="text-2xl font-bold uppercase tablet:text-3xl">
            {title}
          </motion.h1>
          <motion.p variants={childVariant} className="text-sm opacity-60">
            {body}
          </motion.p>
        </motion.div>
      </MotionHeroCard>
    </div>
  );
};
