import Logo from "@/public/photosnap_logo_white.png";
import Image from "next/image";
import Link from "next/link";
import HeaderMobileNavigation from "./header-mobile-navigation";
import HeaderNavigation from "./header-navigation";
import PrimaryButton from "../buttons/primary-button";

export default function Header() {
  return (
    <header className="flex h-17 max-w-full justify-center bg-brand-white px-6 tablet:px-10">
      <div className="flex w-full max-w-[1110px] items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="logo" width={170} height={16} priority />
        </Link>
        <HeaderNavigation />
        <div className="hidden tablet:block">
          <PrimaryButton href="#">Get and Invite</PrimaryButton>
        </div>
        <div className="tablet:hidden">
          <HeaderMobileNavigation />
        </div>
      </div>
    </header>
  );
}
