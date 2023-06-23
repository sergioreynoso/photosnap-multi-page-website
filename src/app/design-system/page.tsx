"use client";
import Buttons from "@/src/components/design-system/buttons";
import Colors from "@/src/components/design-system/colors";
import Typography from "@/src/components/design-system/typography";

export default function DesignSystem() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 pt-18 tablet:px-10">
      <div className="w-full max-w-[1110px] items-center space-y-24">
        <h1 className="-mx-10 mb-16 bg-brand-black px-10 py-24 text-2xl font-bold uppercase text-brand-white tablet:text-3xl">
          Design System
        </h1>
        {<Colors />}
        {<Typography />}
        {<Buttons />}
      </div>
    </main>
  );
}
