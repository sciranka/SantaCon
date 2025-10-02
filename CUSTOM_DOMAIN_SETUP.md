# Custom Domain Setup Guide

When you switch from GitHub Pages subdirectory (`sciranka.github.io/SantaCon`) to a custom domain (e.g., `santacon-bratislava.com`), you'll need to make these changes:

## 1. Next.js Configuration (`next.config.ts`)

**Current (GitHub Pages):**
```typescript
const repo = process.env.GITHUB_REPO || ""
const nextConfig = {
  basePath: repo ? `/${repo}` : "",
}
```

**For Custom Domain:**
```typescript
const nextConfig = {
  // Remove basePath entirely - no longer needed
}
```

## 2. Navigation Links

**Current (GitHub Pages with relative paths):**
- Main page to previous years: `href="./previous-years/"`
- Previous years to home: `href="../"`

**For Custom Domain (absolute paths):**
- Main page to previous years: `href="/previous-years/"`
- Previous years to home: `href="/"`

## 3. GitHub Pages Setup

1. **Add CNAME file** to your repository root:
   ```
   your-domain.com
   ```

2. **Configure DNS** at your domain provider:
   - Add CNAME record pointing to `sciranka.github.io`
   - Or A records pointing to GitHub Pages IPs

3. **Enable custom domain** in GitHub repository settings:
   - Go to Settings → Pages
   - Set custom domain to your domain
   - Enable "Enforce HTTPS"

## 4. Files to Update

Search for TODO comments in:
- [ ] `next.config.ts` - Remove basePath
- [ ] `src/app/page.tsx` - Change `./previous-years/` to `/previous-years/`
- [ ] `src/app/previous-years/page.tsx` - Change `../` to `/`

## 5. Testing

After changes:
1. Run `pnpm build` to test locally
2. Deploy to GitHub Pages
3. Verify navigation works on custom domain
4. Test PWA manifest and icons load correctly

## Notes

- The `trailingSlash: true` setting should remain for consistent URLs
- Image paths via `publicImage()` helper will work automatically
- PWA manifest will automatically use the custom domain as base URL