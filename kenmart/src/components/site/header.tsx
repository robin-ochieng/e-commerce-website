"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/site/theme-toggle";

const DesktopNav = () => (
  <nav className="hidden items-center gap-6 sm:flex">
    <Link href="/" className="hover:underline">
      Home
    </Link>
    <Link href="/products" className="hover:underline">
      Products
    </Link>
    <Link href="/about" className="hover:underline">
      About
    </Link>
  </nav>
);

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b bg-background">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-semibold">
          Kenmart
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="sm:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="mt-6 flex flex-col gap-4 text-lg">
                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/products" onClick={() => setOpen(false)}>
                  Products
                </Link>
                <Link href="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
