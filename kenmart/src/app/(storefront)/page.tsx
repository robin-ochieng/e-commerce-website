import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Kenmart</h1>
        <p className="text-lg text-muted-foreground">
          Your professional e-commerce platform built with Next.js 14, TypeScript, and shadcn/ui
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Beautiful, accessible components built with Radix UI and Tailwind CSS
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dark Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Seamless light/dark theme switching with next-themes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Fully typed for better DX and fewer runtime errors
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Status</h2>
        <div className="flex gap-2">
          <Badge>Next.js 16</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
        </div>
      </section>
    </div>
  );
}

