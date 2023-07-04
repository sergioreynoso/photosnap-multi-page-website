"use client";
import { homeData } from "@/data";
import { HeroCard } from "../cards/hero-card";
import ArrowButton from "../buttons/arrow-button";
import { motion, Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeInOut",
      delayChildren: 0.5,
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
      duration: 0.5,
    },
  },
};

type Props = {
  limit?: number;
};

export default function HerosGroup({ limit = 4 }: Props) {
  const MotionArrowButton = motion(ArrowButton);

  return (
    <>
      {homeData.map((data, index) => {
        const { image, title, body, linkLabel, route } = data;
        const bgColor = index === 0 ? "black" : "white";
        const textPosition = index % 2 === 0 ? "right" : "left";
        const withAccent = index ? false : true;
        const Heading = index === 0 ? motion.h1 : motion.h2;
        const MotionHeroCard = motion(HeroCard);

        if (index + 1 <= limit)
          return (
            <div className={`bg-brand-${bgColor}`}>
              <MotionHeroCard
                image={image}
                accent={withAccent}
                bgColor={bgColor}
                textPosition={textPosition}
                key={index}
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}>
                <motion.div className="flex flex-col items-start gap-4">
                  <Heading
                    className="text-2xl font-bold uppercase tablet:text-3xl"
                    variants={childVariant}>
                    {title}
                  </Heading>
                  <motion.p
                    className="text-sm opacity-60"
                    variants={childVariant}>
                    {body}
                  </motion.p>
                  <motion.div variants={arrowButtonVariant}>
                    <MotionArrowButton href={`/${route}`}>
                      {linkLabel}
                    </MotionArrowButton>
                  </motion.div>
                </motion.div>
              </MotionHeroCard>
            </div>
          );
      })}
    </>
  );
}
