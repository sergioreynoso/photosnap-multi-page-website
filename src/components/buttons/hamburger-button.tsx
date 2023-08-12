import React, { ButtonHTMLAttributes } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  open: boolean;
};

const HamburgerBtn = React.forwardRef<HTMLButtonElement, Props>(
  ({ open, ...props }, ref) => {
    return (
      <button {...props} ref={ref} className="relative h-10 w-10">
        <motion.span
          initial={{ x: "50%" }}
          animate={
            open
              ? { y: [-3, 0, 0], rotate: [0, 0, 45] }
              : { y: [0, 0, -3], rotate: [45, 0, 0] }
          }
          transition={TRANSITION}
          className="absolute block h-[1px] w-5 origin-center bg-brand-black"
        />
        <VisuallyHidden.Root>Navigation</VisuallyHidden.Root>
        <motion.span
          initial={{ x: "50%" }}
          animate={
            open
              ? { y: [3, 0, 0], rotate: [0, 0, -45] }
              : { y: [0, 0, 3], rotate: [-45, 0, 0] }
          }
          transition={TRANSITION}
          className="absolute block h-[1px] w-5 origin-center bg-brand-black"
        />
      </button>
    );
  }
);

const TRANSITION = {
  duration: 0.3,

  // times: [1, 1, 1],
};

HamburgerBtn.displayName = "HamburgerBtn";

export default HamburgerBtn;
