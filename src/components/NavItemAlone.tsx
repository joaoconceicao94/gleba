"use client";

import { MENU_CATEGORIES, PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof MENU_CATEGORIES)[number];

interface MenuItem {
  label: string;
  value: "lgleba" | "nos";
  href: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Lojas Gleba",
    value: "lgleba",
    href: "#",
  },
  {
    label: "Sobre nós",
    value: "nos",
    href: "#",
  },
];

// Example usage in a component
const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.value}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
