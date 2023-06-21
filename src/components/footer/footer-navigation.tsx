import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
export default function FooterNavigation() {
  const Item = ({ href, label }: { href: string; label: string }) => {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <Link href={href} className=" hover:opacity-30">
            {label}
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  };

  return (
    <NavigationMenu.Root className="text-center text-xs font-bold uppercase text-brand-white">
      <NavigationMenu.List className="flex flex-col gap-5  tablet:flex-row desktop:h-full desktop:flex-col desktop:items-start desktop:gap-8">
        <Item href="/" label="Home" />
        <Item href="/stories" label="Stories" />
        <Item href="/features" label="Features" />
        <Item href="/pricing" label="Pricing" />
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
