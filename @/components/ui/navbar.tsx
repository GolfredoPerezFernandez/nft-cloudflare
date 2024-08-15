"use client";
import { useState } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";


export function Navbar({ className }: { className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5   inset-x-0 max-w-[90%] mx-auto z-20", className)}
    >
      <Menu setActive={setActive}>
       
        <div >
        <ConnectButton  accountStatus={{
    smallScreen: 'avatar',
    largeScreen: 'full',
  }} label="Connect Wallet"  showBalance={{
    smallScreen: false,
    largeScreen: true,
  }} /></div>
      </Menu>
    </div>
  );
}
