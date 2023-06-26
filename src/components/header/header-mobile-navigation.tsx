"use client";

import React from "react";
import Link from "next/link";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Dialog from "@radix-ui/react-dialog";

import HamburgerBtn from "@components/buttons/hamburger-button";
import PrimaryButton from "@components/buttons/primary-button";

export default function HeaderMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  const Item = ({ href, label }: { href: string; label: string }) => {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <Link
            href={href}
            className=" hover:opacity-30"
            onClick={() => setOpen(false)}>
            {label}
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  };

  const BigButton = () => (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <PrimaryButton href="#" onClick={() => setOpen(false)}>
          Get and Invite
        </PrimaryButton>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <HamburgerBtn />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 top-[72px] bg-brand-black/50 data-[state=open]:animate-overlayShow " />
        <Dialog.Content className="group fixed left-[50%] top-[72px] w-full origin-top bg-brand-white p-8 data-[state=open]:animate-contentShow">
          <VisuallyHidden.Root asChild>
            <Dialog.Title>Menu</Dialog.Title>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root asChild>
            <Dialog.Description>Navigation dialog</Dialog.Description>
          </VisuallyHidden.Root>
          <NavigationMenu.Root className="text-center text-sm font-bold uppercase tracking-[2.5px] text-brand-black group-data-[state=open]:animate-contentChildrenShow  tablet:text-xs">
            <NavigationMenu.List className="item-center flex flex-col gap-3 tablet:flex-row tablet:items-center tablet:gap-8 desktop:h-full">
              <Item href="/stories" label="Stories" />
              <Item href="/features" label="Features" />
              <Item href="/pricing" label="Pricing" />
              <Separator.Root className="my-[15px] bg-brand-grey data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px tablet:hidden" />
              <BigButton />
            </NavigationMenu.List>
          </NavigationMenu.Root>
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className="fixed right-[24px] top-[-56px] h-10 w-10 appearance-none items-center justify-center">
              <VisuallyHidden.Root>Close Navigation</VisuallyHidden.Root>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
