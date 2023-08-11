import { motion } from "framer-motion";
import data from "@/data";
import { HeroCard } from "@/src/components/cards/hero/hero-card";
import ArrowButton from "@components/buttons/arrow-button";
import {
  arrowButtonVariant,
  heroTextContainerVariant,
  heroTextVariant,
  heroVariant,
} from "@/src/lib/animation-variants/heroAnimationVariants";

const MotionHeroCard = motion(HeroCard);
const MotionArrowButton = motion(ArrowButton);

const StoriesHeroCard = () => {
  const { image, title, linkLabel, body, eyebrow, date, author } =
    data.heros.stories;
  return (
    <div className="bg-brand-black">
      <MotionHeroCard
        initial="hidden"
        animate="visible"
        variants={heroVariant}
        image={image}
        bleed
        priority>
        <motion.div
          variants={heroTextContainerVariant}
          className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
          <motion.p
            variants={heroTextVariant}
            className="mb-4 text-xs uppercase">
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={heroTextVariant}
            className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
            {title}
          </motion.h1>
          <motion.p variants={heroTextVariant} className="mb-6 text-[13px]">
            <span className="mr-2 opacity-60">{date}</span>
            {`by ${author}`}
          </motion.p>
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

export default StoriesHeroCard;
