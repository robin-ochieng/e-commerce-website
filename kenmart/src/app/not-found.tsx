import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-md text-center">
      <h1 className="mb-2 text-3xl font-semibold">Page not found</h1>
      <p className="mb-6 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link className="underline" href="/">
          Go home
        </Link>
        <Link className="underline" href="/products">
          Browse products
        </Link>
      </div>
    </section>
  );
}
