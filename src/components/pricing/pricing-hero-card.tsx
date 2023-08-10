"use client";
import data from "@/data";
import { HeroCard } from "@components/cards/hero-card";
import { motion, Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
      delayChildren: 0.2,
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
      duration: 1,
    },
  },
};

const MotionHeroCard = motion(HeroCard);

export const PricingHeroCard = () => {
  const { title, body, image } = data.heros.pricing;

  return (
    <div className="bg-brand-black">
      <MotionHeroCard
        image={image}
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        priority>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute left-8 top-0 block h-[6px] w-32 bg-brand-accent tablet:hidden"
        />
        <div className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
          <motion.span
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 left-0 top-0 hidden w-[6px] bg-brand-accent tablet:block"
          />

          <motion.h1
            variants={childVariant}
            className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
            {title}
          </motion.h1>
          <motion.p variants={childVariant} className="text-sm opacity-60">
            {body}
          </motion.p>
        </div>
      </MotionHeroCard>
    </div>
  );
};
