# MOTH Website

A modern, responsive website for MOTH (Minimal Overhead Technical Hierarchy) - a compact notation system for technical specifications, PRDs, and coding rules optimized for AI coding agents.

## 🚀 Quick Start

### Local Development

```bash
cd website
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Production Build (Static Export)

```bash
cd website
npm run build
```

The static site is generated in `website/out/` directory.

## 📁 Project Structure

```
website/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with header/footer
│   ├── globals.css           # Global styles
│   ├── docs/
│   │   ├── page.tsx          # Documentation hub
│   │   ├── readme/           # README documentation
│   │   ├── spec/             # Full specification
│   │   ├── quick-reference/  # Syntax cheat sheet
│   │   ├── getting-started/  # Step-by-step guide
│   │   ├── onboarding/       # LLM onboarding prompt
│   │   └── integration/      # Integration guide
│   ├── examples/             # Interactive examples
│   └── templates/            # Downloadable templates
├── public/                   # Static assets
├── package.json
├── next.config.ts            # Next.js configuration
├── tsconfig.json
└── tailwind.config.ts        # Tailwind CSS configuration
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Theme** - Professional slate color palette with amber/orange accents
- **Interactive Components** - Tabs, buttons, and code examples
- **SEO Optimized** - Metadata and Open Graph tags
- **Static Export** - Pre-rendered HTML for GitHub Pages
- **TypeScript** - Type-safe development
- **Accessibility** - Semantic HTML and ARIA labels

## 🛠️ Technology Stack

- **Framework:** Next.js 16.0.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** GitHub Pages (static export)
- **Node.js:** 20+

## 📄 Pages

### Landing Page (`/`)
- Hero section with tagline "Tiny specs for big brains"
- Interactive code examples (PRD, Rules, Architecture)
- Features highlighting 91% compression and LLM-native design
- Call-to-action sections
- Comprehensive footer

### Documentation Hub (`/docs`)
- Central navigation to all documentation
- Card-based layout for easy browsing

### Documentation Pages
- **README** - Introduction to MOTH
- **Specification** - Technical details and file formats
- **Quick Reference** - One-page syntax cheat sheet
- **Getting Started** - Step-by-step guide
- **LLM Onboarding** - Prompt for teaching LLMs about MOTH
- **Integration Guide** - For IDE vendors and plugin developers

### Examples (`/examples`)
- Interactive example selector
- Real-world MOTH examples with syntax highlighting
- TaskFlow PRD, TypeScript Rules, Microservices Architecture

### Templates (`/templates`)
- Downloadable templates for:
  - PRD Template
  - Coding Rules Template
  - Architecture Template
  - API Specification Template

## 🚀 Deployment

### GitHub Pages

The website is configured for automatic deployment to GitHub Pages.

**Setup:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch - deployment happens automatically

**Documentation:** See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

### Manual Deployment

```bash
cd website
npm run build
# Static site is in website/out/
```

## 📝 Development

### Adding a New Page

1. Create a new directory in `website/app/`
2. Add `page.tsx` with your content
3. Use the layout from `website/app/layout.tsx` for consistency
4. Add navigation link in the header

### Styling

- Use Tailwind CSS utility classes
- Dark theme colors: `slate-900`, `slate-800`, `slate-700`
- Accent colors: `amber-400`, `orange-500`
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`

### Building

```bash
npm run build    # Production build
npm run dev      # Development server
npm run lint     # Run ESLint
```

## 🔧 Configuration

### Next.js Config (`next.config.ts`)
- `output: "export"` - Static export mode
- `basePath` - Configurable base path for subdirectory deployment
- `trailingSlash: true` - GitHub Pages compatibility

### Environment Variables

For custom base path:
```bash
NEXT_PUBLIC_BASE_PATH=/moth npm run build
```

## 📊 Performance

- All pages pre-rendered as static HTML
- Optimized CSS and JavaScript bundles
- Image optimization
- Fast page loads with no server required

## 🐛 Troubleshooting

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 20+)

### Styling Issues
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

### Deployment Issues
- Check GitHub Actions workflow in `.github/workflows/deploy.yml`
- View logs in Actions tab on GitHub
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed troubleshooting

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [MOTH Documentation](./docs/)

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions are welcome! Please:
1. Create a feature branch
2. Make your changes
3. Test locally with `npm run dev`
4. Submit a pull request

## 📞 Support

For issues or questions:
1. Check existing documentation in `/docs`
2. Review [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues
3. Check [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for GitHub Pages setup

