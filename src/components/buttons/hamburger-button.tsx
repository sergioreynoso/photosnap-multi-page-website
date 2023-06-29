import React, { ButtonHTMLAttributes } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const HamburgerBtn = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    return (
      <button {...props} ref={ref} className="group relative h-10  w-10">
        <span className="absolute block h-[1px] w-5 bg-brand-black group-data-[state=closed]:animate-reverseRight group-data-[state=open]:animate-rotateRight" />
        <span className="absolute block h-[1px] w-5 bg-brand-black group-data-[state=closed]:animate-reverseLeft group-data-[state=open]:animate-rotateLeft" />
        <VisuallyHidden.Root>Navigation</VisuallyHidden.Root>
      </button>
    );
  }
);

HamburgerBtn.displayName = "HamburgerBtn";

export default HamburgerBtn;
