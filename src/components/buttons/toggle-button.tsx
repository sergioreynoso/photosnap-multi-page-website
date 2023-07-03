import * as Toggle from "@radix-ui/react-toggle";
import { motion } from "framer-motion";

export default function ToggleButton({ ...props }) {
  return (
    <Toggle.Root
      {...props}
      aria-label="Toggle price plan"
      className="relative flex h-8 w-16 justify-start rounded-l-full rounded-r-full bg-brand-grey p-1 data-[state=on]:justify-end">
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 700, damping: 40 }}
        className="block h-6 w-6 rounded-full bg-brand-black"
      />
    </Toggle.Root>
  );
}
