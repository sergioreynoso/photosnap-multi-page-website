import { motion, Variants } from "framer-motion";
import { storyData } from "@/data";
import { HeroCard } from "@/src/components/cards/hero-card";
import ArrowButton from "@/src/components/buttons/arrow-button";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
    },
  },
};

const StoriesHeroCard = () => {
  const { image, route, title, linkLabel, body, eyebrow, date, author } =
    storyData.hero;
  return (
    <HeroCard image={image} fullBleed>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start gap-4">
        <motion.p variants={childVariant} className="text-xs uppercase">
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={childVariant}
          className="text-2xl font-bold uppercase tablet:text-3xl">
          {title}
        </motion.h1>
        <motion.p variants={childVariant} className="text-[13px]">
          <span className="opacity-60">{date}</span>
          {` by ${author}`}
        </motion.p>
        <motion.p variants={childVariant} className="text-sm opacity-60">
          {body}
        </motion.p>
        <motion.div variants={arrowButtonVariant}>
          <ArrowButton href={`/${route}`}>{linkLabel}</ArrowButton>
        </motion.div>
      </motion.div>
    </HeroCard>
  );
};

export default StoriesHeroCard;
