import Link from "next/link";
import ArrowIcon from "@/public/arrow_icon.svg";

type Props = {
  type?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
};

export default function Button<T extends React.ElementType>({
  type,
  href = "#",
  children,
}: Props) {
  if (type === "secondary")
    return (
      <Link
        href={href}
        className="group flex h-10 min-w-[158px] max-w-[270px] transform items-center justify-center gap-4 text-center text-xs font-bold uppercase tracking-[2px] underline-offset-2 transition hover:underline">
        {children}
        <ArrowIcon className="transform transition group-hover:translate-x-1 dark:fill-brand-white" />
      </Link>
    );

  return (
    <Link
      href={href}
      className="flex h-10 min-w-[158px] max-w-[270px] transform items-center justify-center bg-brand-black text-center text-xs font-bold uppercase tracking-[2px] text-brand-white transition-colors hover:bg-brand-grey hover:text-brand-black dark:bg-brand-white dark:text-brand-black">
      {children}
    </Link>
  );
}
