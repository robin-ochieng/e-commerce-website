import Link from "next/link";
import { siteConfig } from "@/config/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-lg font-semibold">{siteConfig.name}</div>
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-medium">Shop</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link href="/products" className="hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/electronics" className="hover:underline">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/categories/fashion" className="hover:underline">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <div className="font-medium">Company</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="font-medium">Follow</div>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <Link href={siteConfig.socials.x} className="hover:underline">
                X (Twitter)
              </Link>
            </li>
            <li>
              <Link href={siteConfig.socials.github} className="hover:underline">
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href={siteConfig.socials.linkedin}
                className="hover:underline"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js & shadcn/ui.
            <span className="sr-only"> — </span>
            <Link href="/sitemap.xml" className="ml-2 hover:underline">
              Sitemap
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
