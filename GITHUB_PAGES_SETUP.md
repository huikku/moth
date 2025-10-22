# GitHub Pages Setup for MOTH Website

## Quick Start

Follow these steps to enable automatic deployment to GitHub Pages:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - Click Save

### Step 2: Verify Workflow

1. Go to the **Actions** tab
2. You should see "Deploy to GitHub Pages" workflow
3. The workflow will automatically run on every push to `main` branch with changes in `website/` directory

### Step 3: Check Deployment

1. After the workflow completes, go back to **Settings → Pages**
2. You'll see a URL like: `https://yourusername.github.io/ant/`
3. Click the link to view your live site

## What Gets Deployed

- All pages from `website/app/` are pre-rendered as static HTML
- CSS and JavaScript are optimized and bundled
- Static assets from `website/public/` are included
- The site is fully functional without a backend server

## Automatic Deployments

The workflow automatically deploys when:
- You push to the `main` branch
- Changes are made in the `website/` directory
- You manually trigger the workflow from the Actions tab

## Manual Deployment

To manually trigger a deployment:

1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the branch (main)
5. Click "Run workflow"

## Deployment Status

Check deployment status:
1. Go to **Actions** tab
2. Look for the latest "Deploy to GitHub Pages" run
3. Green checkmark = successful deployment
4. Red X = deployment failed (check logs for errors)

## Troubleshooting

### Site not updating
- Wait 1-2 minutes for deployment to complete
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check Actions tab for workflow errors

### 404 errors on pages
- Ensure all internal links use Next.js `Link` component
- Check that trailing slashes are consistent
- Verify the base path is correct in `next.config.ts`

### Styling not loading
- Clear browser cache
- Check that CSS files are in the build output
- Verify no console errors in browser DevTools

## Repository Settings

Recommended settings for GitHub Pages:

1. **Settings → General**
   - Ensure repository is public (or GitHub Pages enabled for private)

2. **Settings → Pages**
   - Source: GitHub Actions
   - Enforce HTTPS: Enabled (recommended)

3. **Settings → Actions**
   - Ensure "Allow all actions and reusable workflows" is selected

## Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings → Pages**
2. Under "Custom domain", enter your domain (e.g., `moth.example.com`)
3. Add DNS records as instructed by GitHub
4. GitHub will automatically provision an SSL certificate

## Rollback to Previous Version

To revert to a previous deployment:

1. Go to **Settings → Pages**
2. Under "GitHub Pages", view deployment history
3. Click on a previous deployment to restore it

## More Information

- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

