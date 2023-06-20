import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

//--TODO-- fix ref type error
const PrimaryButton = React.forwardRef(({ children, ...props }: Props, ref) => (
  <Link
    {...props}
    ref={ref}
    className="flex h-10 min-w-[158px]  transform items-center justify-center bg-brand-black text-center text-xs font-bold uppercase tracking-[2px] text-brand-white transition-colors hover:bg-brand-grey hover:text-brand-black dark:bg-brand-white dark:text-brand-black">
    {children}
  </Link>
));

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;
