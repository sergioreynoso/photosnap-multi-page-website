import Link, { LinkProps } from "next/link";
import React from "react";

type Props = LinkProps & {
  children: React.ReactNode;
  bgColor?: "white" | "black";
};

const PrimaryButton = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, bgColor = "black", ...props }, ref) => {
    const blackTheme =
      "bg-brand-black text-brand-white hover:bg-brand-grey hover:text-brand-black";
    const whiteTheme =
      "bg-brand-white text-brand-black hover:bg-brand-grey hover:text-brand-black";
    const theme = bgColor === "black" ? blackTheme : whiteTheme;
    return (
      <Link
        {...props}
        ref={ref}
        className={`flex h-10 min-w-[158px]  transform items-center justify-center ${theme} text-center text-xs font-bold uppercase tracking-[2px] transition-colors`}>
        {children}
      </Link>
    );
  }
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
