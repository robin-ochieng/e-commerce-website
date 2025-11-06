"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as React from "react";

type Props = LinkProps &
  React.ComponentProps<"a"> & { activeClassName?: string };

export function ActiveLink({
  href,
  className,
  activeClassName = "text-foreground",
  ...rest
}: Props) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(String(href)));
  return (
    <Link
      href={href}
      className={cn(
        "text-muted-foreground transition-colors hover:text-foreground",
        isActive && activeClassName,
        className
      )}
      {...rest}
    />
  );
}
