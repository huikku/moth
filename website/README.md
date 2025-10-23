# MOTH Website

This is the official website for MOTH (Machine-Optimized Text Hierarchy), built with [Next.js](https://nextjs.org).

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Building for Production

Build the static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment to GitHub Pages

This site is configured to deploy automatically to GitHub Pages when changes are pushed to the `main` branch.

### Automatic Deployment

The site uses GitHub Actions for automatic deployment:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. The site will be available at: `https://huikku.github.io/moth/`

### Manual Deployment

To manually trigger a deployment:

1. Go to the "Actions" tab in the GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Configuration

The site is configured for GitHub Pages deployment with:

- **Base Path**: `/moth` (matches the repository name)
- **Output**: Static export (`output: "export"`)
- **Images**: Unoptimized (required for static export)
- **Trailing Slash**: Enabled for better compatibility

### GitHub Pages Settings

Make sure GitHub Pages is enabled in the repository settings:

1. Go to Settings → Pages
2. Source: GitHub Actions
3. The site will be deployed from the `gh-pages` branch automatically

## Project Structure

- `/app` - Next.js app directory with pages and components
- `/public` - Static assets (images, videos, fonts)
- `/out` - Generated static site (after build)
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow
