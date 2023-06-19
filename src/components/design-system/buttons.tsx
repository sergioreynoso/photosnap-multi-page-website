import Button from "../button";
import TextSvg from "@/public/test_svg.svg";
import Image from "next/image";

export default function Buttons() {
  return (
    <div className="space-y-12 py-16">
      <h2 className="text-2xl font-bold uppercase">
        <span className="font-bold opacity-25">03</span> Button
      </h2>
      <div className="flex flex-col gap-12 tablet:flex-row tablet:gap-24">
        <div className="flex items-center gap-8">
          <Button type="primary">button 1</Button>
          <span className="opacity-50">Primary</span>
        </div>
        <div className="flex items-center gap-8">
          <Button type="secondary">button 1</Button>
          <span className="opacity-50">Secondary</span>
        </div>
      </div>
    </div>
  );
}
