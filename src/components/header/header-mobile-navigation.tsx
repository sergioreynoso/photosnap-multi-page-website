"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Dialog from "@radix-ui/react-dialog";
import HamburgerBtn from "@components/buttons/hamburger-button";
import PrimaryButton from "@components/buttons/primary-button";

export default function HeaderMobileNavigation() {
  const [open, setOpen] = React.useState(false);

  const contentVariant: Variants = {
    initial: {
      scaleY: 0,
    },
    visible: {
      scaleY: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
        delayChildren: 0.02,
        staggerChildren: 0.1,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.2,
        when: "afterChildren",
      },
    },
  };

  const navigationItemVarian: Variants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const Item = ({ href, label }: { href: string; label: string }) => {
    return (
      <NavigationMenu.Item asChild>
        <motion.li variants={navigationItemVarian}>
          <NavigationMenu.Link asChild>
            <Link
              href={href}
              className=" hover:opacity-30"
              onClick={() => setOpen(false)}>
              {label}
            </Link>
          </NavigationMenu.Link>
        </motion.li>
      </NavigationMenu.Item>
    );
  };

  const BigButton = () => (
    <NavigationMenu.Item asChild>
      <motion.li variants={navigationItemVarian}>
        <NavigationMenu.Link asChild>
          <PrimaryButton href="#" onClick={() => setOpen(false)}>
            Get and Invite
          </PrimaryButton>
        </NavigationMenu.Link>
      </motion.li>
    </NavigationMenu.Item>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <HamburgerBtn />
      </Dialog.Trigger>
      <AnimatePresence mode="sync" initial={false}>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay
              className="fixed inset-0 top-[72px] bg-brand-black/50"
              asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content
              className="translateX(-50%) group fixed top-[72px] z-[100] w-full origin-top transform bg-brand-white p-8"
              asChild>
              <motion.div
                variants={contentVariant}
                initial="initial"
                animate="visible"
                exit="exit"
                style={{ originY: 0 }}>
                <VisuallyHidden.Root asChild>
                  <Dialog.Title>Menu</Dialog.Title>
                </VisuallyHidden.Root>
                <VisuallyHidden.Root asChild>
                  <Dialog.Description>Navigation dialog</Dialog.Description>
                </VisuallyHidden.Root>
                <NavigationMenu.Root className="text-center text-sm font-bold uppercase tracking-[2.5px] text-brand-black tablet:text-xs">
                  <NavigationMenu.List className="item-center flex flex-col gap-3 tablet:flex-row tablet:items-center tablet:gap-8 desktop:h-full">
                    <Item href="/stories" label="Stories" />
                    <Item href="/features" label="Features" />
                    <Item href="/pricing" label="Pricing" />
                    <Separator.Root
                      className="my-[15px] bg-brand-grey data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px tablet:hidden"
                      asChild>
                      <motion.div variants={navigationItemVarian} />
                    </Separator.Root>
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
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
