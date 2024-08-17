"use client";
import { useState } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";


export function Connect({ className }: { className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("inset-x-0 w-fit mx-auto z-20", className)}
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
