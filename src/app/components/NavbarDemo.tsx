"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">  
      <Navbar className="top-2" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* <a href="/" className="uppercase font-mono ml-[45%] text-xl text-green-400">omanet</a> */}
      <Menu setActive={setActive}>

      <MenuItem setActive={setActive} active={active} item="OMANET">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/">Contact</HoveredLink>
            
          </div>
        </MenuItem>
      
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Training and Extension</HoveredLink>
            <HoveredLink href="/">Project Implementation</HoveredLink>
            <HoveredLink href="/">Product Development</HoveredLink>
            <HoveredLink href="/">Consultancy</HoveredLink>
            <HoveredLink href="/">Promotion</HoveredLink>
            <HoveredLink href="/">Entrepreneurship and Marketing</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Organic Wine"
              href="../Products/OrganicWine"
              src="https://images.unsplash.com/photo-1610371800811-a7d2a7b6b3e8?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Fresh Cherry Tomatoes"
              href="../Products/Tomatoes"
              src="https://images.unsplash.com/photo-1589190051962-0b138f75d3c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Herbal Gardening"
              href="../HerbalGardening"
              src="https://images.unsplash.com/photo-1523301551780-cd17359a95d0?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Local Eggs"
              href="../Products/Eggs"
              src="https://images.unsplash.com/photo-1586802990181-a5771596eaea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
