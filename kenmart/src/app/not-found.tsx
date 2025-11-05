import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="mb-2 text-3xl font-semibold">Page not found</h1>
      <p className="mb-6 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="underline">
        Go back home
      </Link>
    </div>
  );
}
