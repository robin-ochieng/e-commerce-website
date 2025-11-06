"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ActiveLink } from "@/components/site/active-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const router = useRouter();

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const term = q.trim();
    if (term) router.push(`/products?search=${encodeURIComponent(term)}`);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Left: Brand + Desktop Nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold tracking-tight">
            {siteConfig.name}
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            {siteConfig.mainNav.map((item) => (
              <ActiveLink key={item.href} href={item.href}>
                {item.label}
              </ActiveLink>
            ))}
          </nav>
        </div>

        {/* Center: Search (md+) */}
        <form
          onSubmit={onSearch}
          className="hidden md:flex min-w-[28ch] max-w-md flex-1 items-center justify-center"
        >
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
            <Input
              aria-label="Search products"
              className="pl-8"
              placeholder="Search products…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </form>

        {/* Right: Theme + Mobile Sheet */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    {siteConfig.name}
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-4 grid gap-4">
                  <form
                    onSubmit={(e) => {
                      onSearch(e);
                      setOpen(false);
                    }}
                  >
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
                      <Input
                        aria-label="Search products"
                        className="pl-8"
                        placeholder="Search products…"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                      />
                    </div>
                  </form>

                  <Separator />

                  <nav className="grid gap-2 text-base">
                    {siteConfig.mainNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="hover:underline"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
