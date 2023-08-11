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
            <div key={index} className={`bg-brand-white`}>
              <MotionHeroCard
                key={index}
                variants={heroVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                image={image}
                theme="white"
                height="tall"
                textPosition={index % 2 === 0 ? "on-right" : "on-left"}>
                <motion.div
                  variants={heroTextContainerVariant}
                  className="relative flex flex-col items-start py-12 pl-8 pr-6 tablet:px-[54px] tablet:py-0 desktop:px-[112px]">
                  <motion.h2
                    variants={heroTextVariant}
                    className="mb-4 text-2xl font-bold uppercase tablet:mb-[21px] tablet:text-3xl">
                    {title}
                  </motion.h2>
                  <motion.p
                    variants={heroTextVariant}
                    className="text-sm opacity-60">
                    {body}
                  </motion.p>
                  <MotionArrowButton
                    variants={arrowButtonVariant}
                    href={`/${route}`}>
                    {linkLabel}
                  </MotionArrowButton>
                </motion.div>
              </MotionHeroCard>
            </div>
          );
      })}
    </>
  );
}
