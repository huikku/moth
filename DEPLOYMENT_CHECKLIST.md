# MOTH Website Deployment Checklist

## Pre-Deployment

- [x] Website built successfully
- [x] All pages render correctly
- [x] Static export configured (`output: "export"`)
- [x] Trailing slashes enabled for GitHub Pages
- [x] `.nojekyll` file added to prevent Jekyll processing
- [x] GitHub Actions workflow created
- [x] Build output: 1.6MB, 119 files (optimized)

## GitHub Repository Setup

- [ ] Repository is public (or GitHub Pages enabled for private)
- [ ] GitHub Actions is enabled in repository settings
- [ ] `.github/workflows/deploy.yml` is committed
- [ ] All documentation files are committed

## GitHub Pages Configuration

1. Go to repository **Settings**
2. Navigate to **Pages** section
3. Under "Build and deployment":
   - [ ] Source is set to "GitHub Actions"
   - [ ] Click Save
4. Verify workflow appears in **Actions** tab

## First Deployment

- [ ] Push changes to `main` branch
- [ ] Check **Actions** tab for workflow run
- [ ] Wait for "Deploy to GitHub Pages" to complete (usually 1-2 minutes)
- [ ] Check for green checkmark (success) or red X (failure)
- [ ] If failed, check workflow logs for errors

## Post-Deployment Verification

1. Go to **Settings → Pages**
2. Note the deployment URL (e.g., `https://yourusername.github.io/ant/`)
3. [ ] Visit the URL in browser
4. [ ] Verify landing page loads correctly
5. [ ] Test navigation links:
   - [ ] Home link works
   - [ ] Docs link works
   - [ ] Examples link works
   - [ ] Templates link works
6. [ ] Check a documentation page (e.g., `/docs/readme`)
7. [ ] Verify styling loads correctly (dark theme visible)
8. [ ] Check responsive design on mobile (use browser DevTools)
9. [ ] Verify no console errors (F12 → Console tab)

## Content Verification

- [ ] Landing page displays correctly
- [ ] All documentation pages are accessible
- [ ] Code examples display properly
- [ ] Links between pages work
- [ ] Footer displays correctly
- [ ] Header navigation is functional

## Performance Check

- [ ] Pages load quickly (< 2 seconds)
- [ ] No 404 errors in console
- [ ] CSS and JavaScript load properly
- [ ] Images display correctly

## Troubleshooting

If deployment fails:

1. **Check workflow logs:**
   - Go to Actions tab
   - Click on failed workflow run
   - Check "Build" and "Deploy" job logs

2. **Common issues:**
   - Node.js version mismatch → Check `.node-version` or workflow
   - Missing dependencies → Run `npm ci` locally
   - Build errors → Check `npm run build` output locally

3. **If pages don't load:**
   - Hard refresh browser (Ctrl+Shift+R)
   - Check browser console for errors
   - Verify base path is correct in `next.config.ts`

## Rollback Plan

If something goes wrong:

1. Go to **Settings → Pages**
2. View deployment history
3. Click on previous successful deployment to restore

## Continuous Deployment

After initial setup:

- [ ] Workflow automatically runs on push to `main`
- [ ] Changes in `website/` directory trigger deployment
- [ ] Workflow can be manually triggered from Actions tab
- [ ] Deployment history is visible in Settings → Pages

## Documentation

- [x] GITHUB_PAGES_SETUP.md - Setup instructions
- [x] DEPLOYMENT.md - Detailed deployment guide
- [x] README_WEBSITE.md - Website documentation
- [x] .github/workflows/deploy.yml - Workflow configuration

## Success Criteria

✅ Website is live on GitHub Pages
✅ All pages are accessible
✅ Styling displays correctly
✅ Navigation works
✅ No console errors
✅ Responsive design works
✅ Automatic deployments are working

## Next Steps

1. Share the live URL with team/users
2. Monitor first few deployments for issues
3. Set up custom domain (optional)
4. Configure DNS records if using custom domain
5. Enable HTTPS (automatic with GitHub Pages)

## Support Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Troubleshooting Guide](./DEPLOYMENT.md)

