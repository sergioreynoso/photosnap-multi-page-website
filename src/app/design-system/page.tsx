"use client";
import Buttons from "@/src/components/design-system/buttons";
import Colors from "@/src/components/design-system/colors";
import Typography from "@/src/components/design-system/typography";

export default function DesignSystem() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="w-full max-w-5xl items-center space-y-24">
        <h1 className="mb-16 text-2xl font-bold uppercase tablet:text-3xl">
          Design System
        </h1>
        {<Colors />}
        {<Typography />}
        {<Buttons />}
      </div>
    </main>
  );
}
