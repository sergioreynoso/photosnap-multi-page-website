import Logo from "@/public/photosnap_logo_white.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-17 max-w-full justify-center bg-brand-white px-6">
      <div className="flex w-full max-w-[1110px] items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="logo" width={170} height={16} />
        </Link>
        <button className="text-brand-black">=</button>
      </div>
    </header>
  );
}
