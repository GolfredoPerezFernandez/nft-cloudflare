"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5   inset-x-0 max-w-[90%] mx-auto z-50", className)}
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
