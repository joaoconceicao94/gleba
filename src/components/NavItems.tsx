"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  // useEffect(() => {
  //   const handler = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       setActiveIndex(null);
  //     }
  //   };
  // });

  const handleButtonClick = (url: string) => {
    window.location.href = url;
  };

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  if (!PRODUCT_CATEGORIES) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isAnyOpen = activeIndex !== null;
        const isOpen = i === activeIndex;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
            handleButtonClick={() => handleButtonClick(category.url)}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
