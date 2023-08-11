import { Variants } from "framer-motion";

export const heroVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      delayChildren: 0.5,
    },
  },
};

export const heroTextContainerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
    },
  },
};

export const arrowButtonVariant: Variants = {
  hidden: {
    x: "-20%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
};
