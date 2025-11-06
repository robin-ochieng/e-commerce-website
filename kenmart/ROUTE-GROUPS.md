# Route Groups & Layout Structure

## ✅ Route Groups Created

### Folder Structure
```
src/app/
├── (storefront)/
│   ├── page.tsx           # Home page (/)
│   ├── products/page.tsx  # Products page (/products)
│   └── template.tsx       # Storefront wrapper
├── (auth)/
│   ├── login/page.tsx     # Login page (/login)
│   ├── register/page.tsx  # Register page (/register)
│   └── template.tsx       # Auth wrapper (centered, max-w-md)
├── (account)/
│   ├── page.tsx           # Account dashboard (/account)
│   └── template.tsx       # Account wrapper
├── (admin)/
│   ├── page.tsx           # Admin dashboard (/admin)
│   └── template.tsx       # Admin wrapper
├── layout.tsx             # Root layout
├── loading.tsx            # Global loading state
├── error.tsx              # Global error boundary
├── not-found.tsx          # 404 page
└── globals.css
```

## 📋 Routes Available

| Route | Group | Description |
|-------|-------|-------------|
| `/` | (storefront) | Home page with feature showcase |
| `/products` | (storefront) | Products listing |
| `/login` | (auth) | Login page |
| `/register` | (auth) | Register page |
| `/account` | (account) | Account dashboard |
| `/admin` | (admin) | Admin dashboard |

## 🎨 Root Layout Features

### ✅ Fonts
- **Inter** from Google Fonts
- CSS variable: `--font-sans`
- Optimized with `display: "swap"`

### ✅ Metadata
```ts
{
  title: { default: "Kenmart", template: "%s · Kenmart" },
  description: "Simple, fast, and delightful shopping.",
  keywords: ["ecommerce", "kenya", "nextjs", "kenmart"],
  openGraph: { ... }
}
```

### ✅ Viewport
```ts
{
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
    { color: "#ffffff" }
  ]
}
```

### ✅ Accessibility
- **Skip to content link** - Visible on focus, jumps to `#__main`
- **Semantic HTML** - `<header>`, `<main>`, `<footer>`
- **ARIA-compliant** - Proper focus management

### ✅ Structure
```tsx
<html lang="en" suppressHydrationWarning>
  <body>
    <a href="#__main">Skip to content</a>
    <ThemeProvider>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main id="__main" className="container flex-1 py-6">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  </body>
</html>
```

## 📦 Template Wrappers

### Storefront Template
```tsx
<div className="space-y-6">{children}</div>
```
- Applies consistent vertical spacing to storefront pages

### Auth Template
```tsx
<div className="mx-auto w-full max-w-md">{children}</div>
```
- Centers auth forms
- Constrains width for better UX

### Account Template
```tsx
<div className="space-y-6">{children}</div>
```
- Consistent spacing for account pages

### Admin Template
```tsx
<div className="space-y-6">{children}</div>
```
- Consistent spacing for admin pages

## 🎯 Benefits of Route Groups

1. **Organization** - Logical grouping without affecting URLs
2. **Scoped Layouts** - Each group can have its own layout/template
3. **Code Splitting** - Better performance with group-level code splits
4. **Maintainability** - Clear separation of concerns
5. **Flexibility** - Easy to add group-specific middleware, layouts, or error boundaries

## 🔄 Error & Loading Boundaries

### Global Loading State (`loading.tsx`)
- Skeleton grid (6 cards)
- Responsive (2 cols sm, 3 cols lg)
- Reusable across all routes

### Global Error Boundary (`error.tsx`)
- Client component with reset capability
- Displays error message
- "Try again" button

### 404 Page (`not-found.tsx`)
- Custom not found page
- Link back to home

## 🎨 Container Utility

Updated in `globals.css`:
```css
.container {
  @apply mx-auto w-full max-w-6xl px-4;
}
```
- Max width: 1536px (6xl)
- Horizontal padding: 1rem
- Auto-centered

## ✅ Verification Checklist

- [x] Route groups created: (storefront), (auth), (account), (admin)
- [x] All placeholder pages work
- [x] Templates applied to each group
- [x] Root layout has Inter font
- [x] Metadata with template support
- [x] Viewport with theme colors
- [x] Skip link for accessibility
- [x] Semantic HTML structure
- [x] ThemeProvider wrapping
- [x] Global loading state
- [x] Global error boundary
- [x] Container utility updated
- [x] All routes accessible
- [x] Dark/light theme working
- [x] No console errors

## 🚀 Testing Routes

Start dev server:
```bash
pnpm dev
```

Visit these URLs to verify:
- http://localhost:3000 → Home (storefront)
- http://localhost:3000/products → Products
- http://localhost:3000/login → Login (centered)
- http://localhost:3000/register → Register (centered)
- http://localhost:3000/account → Account dashboard
- http://localhost:3000/admin → Admin dashboard
- http://localhost:3000/nonexistent → 404 page

## 📝 Next Steps

The route structure is ready for:
1. Adding authentication logic to (auth) routes
2. Building product catalog in (storefront)
3. Creating account management in (account)
4. Developing admin features in (admin)
5. Adding group-specific layouts or middleware
6. Implementing protected routes

---

**Status**: ✅ Production-ready route group structure with polished root layout
