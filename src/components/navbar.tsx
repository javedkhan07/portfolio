"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/app/components/mode-toggle";
import { useTheme } from "@/app/components/theme-provider";

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-center py-4">
      <div className="flex space-x-4 items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive
                  ? "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-100"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
        <div className="ml-2 relative">
          <ModeToggle />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 dark:bg-blue-400"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 dark:bg-blue-500"></span>
          </span>
        </div>
      </div>
    </nav>
  );
}
