import Image, { StaticImageData } from "next/image";
import { ImageAttributes } from "./primary-hero-card";

type Props = {
  children: React.ReactNode;
  image: ImageAttributes;
};

export default function FeatureCard({ children, image }: Props) {
  return (
    <div className="flex max-w-[350px] flex-col items-center gap-12 desktop:px-0">
      <div className=" w-17 flex h-17 items-center justify-center">
        <Image src={image.src} alt={image.alt} />
      </div>
      {children}
    </div>
  );
}
