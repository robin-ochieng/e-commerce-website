import { notFound } from "next/navigation";

// Mock product database
const products = [
  { slug: "laptop", title: "Gaming Laptop", price: 1299 },
  { slug: "headphones", title: "Wireless Headphones", price: 199 },
  { slug: "keyboard", title: "Mechanical Keyboard", price: 149 },
];

async function getProductBySlug(slug: string) {
  // Simulate async data fetch
  await new Promise((resolve) => setTimeout(resolve, 100));
  return products.find((p) => p.slug === slug);
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-2xl text-muted-foreground">
        ${product.price.toFixed(2)}
      </p>
      <div className="mt-6">
        <p className="text-muted-foreground">
          This is a demo product page. Visit{" "}
          <code className="rounded bg-muted px-1 py-0.5">
            /products/{product.slug}
          </code>{" "}
          to see it.
        </p>
      </div>
    </div>
  );
}

// Generate static params for known products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
