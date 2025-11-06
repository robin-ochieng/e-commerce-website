"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Usage:
 * <Breadcrumbs className="mb-4" rootLabel="Home" />
 */
export function Breadcrumbs({
  className,
  rootLabel = "Home",
}: {
  className?: string;
  rootLabel?: string;
}) {
  const pathname = usePathname();
  const segments = React.useMemo(() => {
    const parts = (pathname || "/").split("/").filter(Boolean);
    const acc: { href: string; label: string }[] = [];
    parts.forEach((part, idx) => {
      const href = "/" + parts.slice(0, idx + 1).join("/");
      acc.push({
        href,
        label: decodeURIComponent(part.replace(/-/g, " ")),
      });
    });
    return acc;
  }, [pathname]);

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm text-muted-foreground", className)}
    >
      <ol className="flex items-center gap-1">
        <li>
          <Link href="/" className="hover:underline">
            {rootLabel}
          </Link>
        </li>
        {segments.map((seg, i) => {
          const isLast = i === segments.length - 1;
          return (
            <React.Fragment key={seg.href}>
              <li aria-hidden className="px-1">
                /
              </li>
              <li>
                {isLast ? (
                  <span aria-current="page" className="text-foreground">
                    {seg.label}
                  </span>
                ) : (
                  <Link href={seg.href} className="hover:underline">
                    {seg.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
