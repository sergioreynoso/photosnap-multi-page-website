"use client";
import { motion, Variants } from "framer-motion";
import data from "@/data";
import { HeroCard } from "@/src/components/cards/hero-card";
import ArrowButton from "@/src/components/buttons/arrow-button";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
      delayChildren: 0.5,
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

const arrowButtonVariant: Variants = {
  hidden: {
    x: "-20%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const HomeHeroCard = () => {
  const MotionHeroCard = motion(HeroCard);
  const MotionArrowButton = motion(ArrowButton);

  const { body, image, linkLabel, title } = data.heros.home;

  return (
    <div className="bg-brand-black">
      <MotionHeroCard
        initial="hidden"
        animate="visible"
        variants={containerVariant}
        image={image}
        height="tall">
        <motion.div
          variants={childVariant}
          className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
          <h1 className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
            {title}
          </h1>
          <p className="mb-6 text-sm opacity-60">{body}</p>
          <MotionArrowButton variants={arrowButtonVariant} href={``}>
            {linkLabel}
          </MotionArrowButton>
        </motion.div>
      </MotionHeroCard>
    </div>
  );
};

export default HomeHeroCard;
