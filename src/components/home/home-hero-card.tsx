"use client";
import { motion, Variants } from "framer-motion";
import data from "@/data";
import { HeroCard } from "@components/cards/hero-card";
import ArrowButton from "@components/buttons/arrow-button";

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

const MotionHeroCard = motion(HeroCard);
const MotionArrowButton = motion(ArrowButton);

const HomeHeroCard = () => {
  const { body, image, linkLabel, title } = data.heros.home;

  return (
    <MotionHeroCard
      initial="hidden"
      animate="visible"
      variants={containerVariant}
      image={image}
      height="tall"
      priority>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute left-8 top-0 block h-[6px] w-32 bg-brand-accent tablet:hidden"
      />
      <motion.div
        variants={childVariant}
        className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 top-0 hidden w-[6px] bg-brand-accent tablet:block"
        />
        <h1 className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
          {title}
        </h1>
        <p className="mb-6 text-sm opacity-60">{body}</p>
        <MotionArrowButton variants={arrowButtonVariant} href={``}>
          {linkLabel}
        </MotionArrowButton>
      </motion.div>
    </MotionHeroCard>
  );
};
export default HomeHeroCard;
