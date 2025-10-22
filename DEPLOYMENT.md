# MOTH Website Deployment Guide

## GitHub Pages Setup

The MOTH website is configured for static deployment to GitHub Pages.

### Prerequisites

1. Repository must be public (or have GitHub Pages enabled for private repos)
2. GitHub Actions must be enabled in repository settings

### Configuration

The website is configured with:
- **Output Mode:** Static export (`output: "export"`)
- **Trailing Slashes:** Enabled for GitHub Pages compatibility
- **Base Path:** Configurable via `NEXT_PUBLIC_BASE_PATH` environment variable

### Deployment Steps

#### 1. Configure GitHub Pages

1. Go to your repository settings
2. Navigate to **Settings → Pages**
3. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - This allows the workflow to deploy automatically

#### 2. Deploy

The website automatically deploys when you push to the `main` branch with changes in the `website/` directory.

To manually trigger a deployment:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Local Testing

To test the static export locally:

```bash
cd website
npm run build
npx serve out
```

Then visit `http://localhost:3000` to preview the static site.

### Build Output

The static site is generated in `website/out/` directory with:
- Pre-rendered HTML pages
- Optimized CSS and JavaScript
- Static assets

### Troubleshooting

**Issue:** Pages not deploying
- Check that GitHub Actions is enabled in repository settings
- Verify the workflow file is in `.github/workflows/deploy.yml`
- Check the Actions tab for workflow errors

**Issue:** Styling not loading
- Ensure `basePath` is correctly configured
- Check that CSS files are properly referenced in the build output

**Issue:** Links not working
- Verify `trailingSlash: true` is set in `next.config.ts`
- Check that all internal links use Next.js `Link` component

### Environment Variables

For custom base path (if deploying to a subdirectory):

```bash
NEXT_PUBLIC_BASE_PATH=/moth npm run build
```

### Rollback

To rollback to a previous deployment:
1. Go to **Settings → Pages**
2. Under "GitHub Pages," you can see deployment history
3. Click on a previous deployment to restore it

### Additional Resources

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

