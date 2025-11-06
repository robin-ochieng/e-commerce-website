import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="text-center">
      <h2 className="mb-2 text-2xl font-semibold">Product not found</h2>
      <p className="mb-6 text-muted-foreground">
        It might be out of stock or was removed.
      </p>
      <Link className="underline" href="/products">
        Back to products
      </Link>
    </div>
  );
}
