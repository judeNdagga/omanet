"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import logo from "../../../public/images/OMANETLOGO2.png";
import Image from "next/image";

export function NavbarDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar>{children}</Navbar>
    </div>
  );
}

function Navbar({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={cn(
        "fixed flex items-center inset-x-0 max-w-5xl mx-auto z-50 px-4 gap-3 transition-all duration-300",
        scrolled ? "top-2" : "top-4",
        className
      )}
    >
      <a className="hidden sm:block shrink-0" href="/">
        <Image
          src={logo}
          alt="OMANET logo"
          className={cn(
            "rounded-full hover:scale-110 transition-all duration-300",
            scrolled ? "w-11 h-11" : "w-14 h-14"
          )}
        />
      </a>

      <div className="flex-1 min-w-0">
        <Menu setActive={setActive}>
          <a href="/" className="block sm:hidden">
            <MenuItem setActive={setActive} active={active} item="HOME">
              <div className="flex flex-col space-y-3 text-sm">
                <HoveredLink href="/">Homepage</HoveredLink>
              </div>
            </MenuItem>
          </a>

          <a href="/Services">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-3 text-sm">
                <HoveredLink href="/Services/Entrepreneurship">
                  Entrepreneurship &amp; Marketing
                </HoveredLink>
                <HoveredLink href="/Services/Training">
                  Training &amp; Extension
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

          <a href="/About">
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-3 text-sm">
                <HoveredLink href="/About">About OMANET</HoveredLink>
                <HoveredLink href="/Contact">Contact</HoveredLink>
              </div>
            </MenuItem>
          </a>

          <a href="/Products">
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid sm:grid-cols-2 gap-6 p-1">
                <ProductItem
                  title="Organic Wine"
                  href="/Products"
                  src="https://images.unsplash.com/photo-1610371800811-a7d2a7b6b3e8?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  description="Organic wine with a rich taste"
                />
                <ProductItem
                  title="Cherry Tomatoes"
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

          {/* Contact link always visible in pill on desktop */}
          <a href="/Contact" className="hidden sm:block">
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-3 text-sm">
                <HoveredLink href="/Contact">Get in Touch</HoveredLink>
              </div>
            </MenuItem>
          </a>
        </Menu>
      </div>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
