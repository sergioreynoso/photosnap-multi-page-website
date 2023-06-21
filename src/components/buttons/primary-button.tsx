import Link, { LinkProps } from "next/link";
import React, { Ref } from "react";

type Props = LinkProps & {
  children: React.ReactNode;
};

const PrimaryButton = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, ...props }, ref) => (
    <Link
      {...props}
      ref={ref}
      className="flex h-10 min-w-[158px]  transform items-center justify-center bg-brand-black text-center text-xs font-bold uppercase tracking-[2px] text-brand-white transition-colors hover:bg-brand-grey hover:text-brand-black dark:bg-brand-white dark:text-brand-black">
      {children}
    </Link>
  )
);

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
