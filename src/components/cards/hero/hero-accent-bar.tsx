import React from "react";

const HeroAccentBar = React.forwardRef<HTMLSpanElement>(({ ...props }, ref) => {
  return (
    <span
      ref={ref}
      {...props}
      className="absolute left-8 top-0 block h-[6px] w-32 bg-brand-accent [--scaleX-from:0%] [--scaleX-to:100%] [--scaleY-from:100%] [--scaleY-to:100%]
            tablet:bottom-0 tablet:left-0 tablet:h-auto tablet:w-[6px]
            tablet:[--scaleX-from:100%] tablet:[--scaleX-to:100%] tablet:[--scaleY-from:0%] tablet:[--scaleY-to:100%]
            "
    />
  );
});

HeroAccentBar.displayName = "HeroAccentBar";

export default HeroAccentBar;
