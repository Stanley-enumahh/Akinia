"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  BanknoteArrowUp,
  CircleDollarSign,
  Phone,
} from "lucide-react";

export const exploreLinks = [
  { label: "Home", href: "/home", icon: Home },
  { label: "Companies", href: "/companies", icon: Building2 },
  { label: "Investors", href: "/investors", icon: CircleDollarSign },
  { label: "Contacts", href: "/contacts", icon: Phone },
  { label: "Funds", href: "/funds", icon: BanknoteArrowUp },
];

export const SideNav = () => {
  const pathname = usePathname();
  return (
    <aside className="w-[200px] fixed left-0 top-[47px] overflow-auto h-screen flex flex-col gap-7 px-4 py-6 bg-white shadow">
      {/* expolre */}
      <ul className="flex flex-col gap-2">
        <h4 className="text-gray-500 text-sm font-semibold mb-3">Explore</h4>
        {exploreLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium px-3 flex flex-row gap-2 py-2 rounded-[6px] text-sm ${
                isActive
                  ? "bg-blue-200 text-[#031D3D]"
                  : "text-gray-600 hover:text-[#031D3D]"
              }`}
            >
              <Icon size={16} />
              {link.label}
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};
