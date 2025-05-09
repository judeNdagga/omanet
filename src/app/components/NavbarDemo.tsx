"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import logo from "../../../public/images/OMANETLOGO2.png";
import Image from "next/image";
import SignInNavbarAddition from "./SignInNavbarAddition";

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
      className={cn(
        "fixed flex top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <a className="hidden sm:block pt-4" href="/">
        <Image
          src={logo}
          alt="logo"
          className="rounded-full w-[6em] hover:scale-150 transition duration-500"
        />
      </a>

      {/* <a href="/" className="uppercase font-mono ml-[45%] text-xl text-green-400">omanet</a> */}
      <Menu setActive={setActive}>
        <a href="/" className="block sm:hidden">
          <MenuItem setActive={setActive} active={active} item="HOME">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Homepage</HoveredLink>
            </div>
          </MenuItem>
        </a>

        <a href="/Services">
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/Services/Entrepreneurship">
                Entrepreneurship and Marketing
              </HoveredLink>
              <HoveredLink href="/Services/Training">
                Training and Extension
              </HoveredLink>
              <HoveredLink href="/Services/ProductDevelopment">
                Product Development
              </HoveredLink>
              <HoveredLink href="/Services/Communication">
                Communication
              </HoveredLink>

              <HoveredLink href="/Services/Consultancy">
                Consultancy
              </HoveredLink>
            </div>
          </MenuItem>
        </a>

        <a href="/About/Team">
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/About/Gallery">Gallery</HoveredLink>
              <HoveredLink href="/Contact">Contact</HoveredLink>
              <HoveredLink href="/About/Team">Team</HoveredLink>
            </div>
          </MenuItem>
        </a>

        <a href="/Products">
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="text-sm grid sm:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Organic Wine"
                href="/Products"
                src="https://images.unsplash.com/photo-1610371800811-a7d2a7b6b3e8?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Organic wine with a rich taste"
              />
              <ProductItem
                title="Fresh Cherry Tomatoes"
                href="/Products"
                src="https://images.unsplash.com/photo-1589190051962-0b138f75d3c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Fresh cherry tomatoes from organic farms"
              />
              <ProductItem
                title="Herbal Gardening"
                href="/Products/HerbalGardening"
                src="https://images.unsplash.com/photo-1523301551780-cd17359a95d0?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Never start from scratch again. Follow our guide"
              />
              <ProductItem
                title="Local Eggs"
                href="/Products"
                src="https://images.unsplash.com/photo-1586802990181-a5771596eaea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Delicious organic eggs"
              />
            </div>
          </MenuItem>
        </a>
      </Menu>
    </div>
  );
}
