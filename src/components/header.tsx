"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import clsx from "clsx";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between pl-2">
        <Link to="/" className="text-lg font-semibold">
          Wedding Photography
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-4">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.path}>
                <NavigationMenuLink asChild>
                  <Link
                    to={link.path}
                    className="px-4 py-2 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={clsx(
          "md:hidden bg-white shadow-md border-t border-gray-200 transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col items-start space-y-2 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-gray-700 px-4 py-2 rounded hover:bg-gray-100 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
