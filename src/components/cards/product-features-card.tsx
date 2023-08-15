"use client";
import Image from "next/image";
import { ImageAttributes } from "./hero/hero-card";
import { motion, Variants } from "framer-motion";

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
  transition: {
    type: "tween",
    ease: "easeOut",
  },
};

type Props = {
  children: React.ReactNode;
  image: ImageAttributes;
};

export default function ProductFeaturesCard({ children, image }: Props) {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="flex max-w-[350px] flex-col items-center gap-12 desktop:px-0">
      <motion.div
        variants={childVariant}
        className="w-17 relative flex h-17 items-center justify-center">
        <Image src={image.src} alt={image.alt} />
      </motion.div>
      {children}
    </motion.div>
  );
}
