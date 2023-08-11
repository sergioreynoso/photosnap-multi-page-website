import { Variants } from "framer-motion";

const SPRING = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const TWEEN = {
  type: "tween",
  ease: "easeOut",
  duration: 0.5,
};

export const heroVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TWEEN,
  },
};

export const heroTextContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      // staggerChildren: 0.2,
    },
  },
};

export const heroTextVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TWEEN,
  },
};

export const heroAccentVariant: Variants = {
  hidden: {
    opacity: 0,
    scaleX: "var(--scaleX-from,1)",
    scaleY: "var(--scaleY-from,1)",
  },
  visible: {
    opacity: 1,
    scaleX: "var(--scaleX-to,1)",
    scaleY: "var(--scaleY-to,1)",
    transition: SPRING,
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
    transition: SPRING,
  },
};
