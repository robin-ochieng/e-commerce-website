export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kenmart. All rights reserved.
      </div>
    </footer>
  );
}
