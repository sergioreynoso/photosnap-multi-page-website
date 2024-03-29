"use client";
import data from "@/data";
import { HeroCard } from "@/src/components/cards/hero/hero-card";
import ArrowButton from "@components/buttons/arrow-button";
import { motion, Variants } from "framer-motion";
import {
  arrowButtonVariant,
  heroTextContainerVariant,
  heroTextVariant,
  heroVariant,
} from "@/src/lib/animation-variants/heroAnimationVariants";

type Props = {
  limit?: number;
};

export default function PromoGroup({ limit = 4 }: Props) {
  const MotionArrowButton = motion(ArrowButton);

  return (
    <>
      {data.promos.map((promo, index) => {
        const { image, title, body, linkLabel, route } = promo;
        const MotionHeroCard = motion(HeroCard);

        if (index + 1 <= limit)
          return (
            <MotionHeroCard
              key={index}
              variants={heroVariant}
              initial="hidden"
              animate="visible"
              image={image}
              theme="white"
              height="medium"
              textPosition={index % 2 === 0 ? "on-right" : "on-left"}>
              <motion.div
                variants={heroTextContainerVariant}
                className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:translate-y-2 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
                <motion.h2
                  variants={heroTextVariant()}
                  className="mb-4 whitespace-pre-line break-words text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
                  {title}
                </motion.h2>
                <motion.p
                  variants={heroTextVariant(0, 0.6)}
                  className="mb-9 text-sm opacity-60">
                  {body}
                </motion.p>
                <MotionArrowButton
                  variants={arrowButtonVariant}
                  href={`/${route}`}>
                  {linkLabel}
                </MotionArrowButton>
              </motion.div>
            </MotionHeroCard>
          );
      })}
    </>
  );
}
