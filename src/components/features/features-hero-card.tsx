"use client";
import { HeroCard } from "../cards/hero-card";
import { featuresData } from "@/data";
import { motion, Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: {
    // opacity: 0,
  },
  visible: {
    // opacity: 1,
    transition: {
      delayChildren: 0.2,
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

export const FeaturesHeroCard = () => {
  const { title, body, image } = featuresData.hero;

  return (
    <HeroCard image={image} accent>
      <motion.div
        variants={containerVariant}
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
    </HeroCard>
  );
};
