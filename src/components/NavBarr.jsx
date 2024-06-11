"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";

//importing required images
import cafeCorner from "../../public/cafeCorner.png"
import threads from "../../public/threads.png"
import moodmate from "../../public/moodmate.png"
import shopiverse from "../../public/shopiverse.png"
import p1 from "../../public/p1.jpeg"
import p2 from "../../public/p2.jpeg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";




export function NavBarr({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("sticky top-10 inset-x-0 max-w-2xl mx-auto z-50 py-2", className="dark")}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Web Development 🌐</HoveredLink>
            <HoveredLink href="/">Modern Web Design 🎨</HoveredLink>
            <HoveredLink href="/">Personal Branding 👤</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid md:grid-cols-2 grid-cols-1 gap-10 p-4">
            <ProductItem
              title="Cafe Corner"
              href="https://cafe-corner.vercel.app/"
              src={cafeCorner}
              description="A Modern Cafe Shop website for buissnesses."
            />
            <ProductItem
              title="Threads: Clothing Store"
              href="https://threads-clothing.vercel.app/"
              src={threads}
              description="Modern Animated Clothing Store for GenZ kids."
            />
            <ProductItem
              title="MoodMate: Digital Journal"
              href="https://mood-matee.vercel.app/"
              src={moodmate}
              description="Online Pocket Journal with 4 exclusive minecraft themes to choose from, according to your mood."
            />
            <ProductItem
              title="Shopiverse: Scalable Ecommerce Store"
              href="https://shopiverse-iota.vercel.app/"
              src={shopiverse}
              description="Modern day scalable ecommerce store with an extra admin dashboard functionality."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Team">
          <div className="flex flex-col space-y-4 text-sm">
            <div className="flex gap-3 items-center justify-center h-auto w-auto cursor-pointer">
              <p>Subhamay Dey</p>
              <Image className="rounded-full" src={p2} height={50} width={50} alt="p1"/>
            </div>
            
            <div className="flex gap-3 items-center justify-center h-auto w-auto cursor-pointer">
              <p>Subhraneel Goswami</p>
              <Image className="rounded-full" src={p1} height={50} width={50} alt="p2"/>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
