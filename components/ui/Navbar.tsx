"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  NavLink,
} from "@/components/ui/NavBarMenu";
import { cn } from "@/app/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("w-4/5 mx-auto z-50 justify-center", className)}>
      <Menu setActive={setActive}>
        <div className="grid grid-cols-4 gap-4 justify-items-center w-full">
          <div className="">
            <NavLink href="/">Home</NavLink>
            {/* <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem> */}
          </div>
          <div className="">
            <NavLink href="/">Currilculum</NavLink>
            {/* <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem> */}
          </div>
          <div className="">
            <MenuItem setActive={setActive} active={active} item="Happenings">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Notices</HoveredLink>
                <HoveredLink href="/individual">Events</HoveredLink>
                <HoveredLink href="/team">News</HoveredLink>
                <HoveredLink href="/enterprise">Calender</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <div className="">
            <NavLink href="/aboutus">About</NavLink>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
