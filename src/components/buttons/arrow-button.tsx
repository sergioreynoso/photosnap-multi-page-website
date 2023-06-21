import Link, { LinkProps } from "next/link";
import React from "react";
import ArrowIcon from "../icons/arrowIcon";

type Props = LinkProps & {
  children: React.ReactNode;
};

const ArrowButton = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, ...props }, ref) => (
    <Link
      {...props}
      ref={ref}
      className="group flex h-10 min-w-[158px]  transform items-center justify-center gap-4 text-center text-xs font-bold uppercase tracking-[2px] underline-offset-2 transition hover:underline">
      {children}
      <ArrowIcon className="transform transition group-hover:translate-x-1 " />
    </Link>
  )
);

ArrowButton.displayName = "ArrowButton";

export default ArrowButton;
