import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

//--TODO-- Fix any errors
const HamburgerBtn = React.forwardRef<any>((props, forwardedRef) => {
  return (
    <button {...props} ref={forwardedRef} className="group relative h-10  w-10">
      <span className="animate-and-finish absolute block h-[1px] w-5 -translate-y-[4px] translate-x-[50%]  bg-brand-black  group-data-[state=open]:animate-rotateRight" />
      <span className="animate-and-finish absolute block h-[1px] w-5 translate-x-[50%] translate-y-[4px]  bg-brand-black  group-data-[state=open]:animate-rotateLeft" />
    </button>
  );
});

HamburgerBtn.displayName = "HamburgerBtn";

export default HamburgerBtn;
