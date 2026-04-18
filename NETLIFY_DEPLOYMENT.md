# Cutlyst - Netlify Deployment Guide

## Overview
The Cutlyst codebase is fully optimized and ready for deployment on Netlify. This guide provides step-by-step instructions for deploying your video editing agency website.

## Prerequisites
- GitHub repository: https://github.com/tonniemungai/cutlyst
- Netlify account (free or paid)
- Node.js 22.13.0+ (Netlify will use this version)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended for Beginners)

1. **Connect GitHub to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select the `tonniemungai/cutlyst` repository

2. **Configure Build Settings**
   - **Build command**: `pnpm install && pnpm build`
   - **Publish directory**: `dist/public`
   - **Node version**: `22.13.0` (set in netlify.toml)
   - **Package manager**: `pnpm`

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - Your site will be live at `https://[random-name].netlify.app`

4. **Connect Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., cutlyst.com)
   - Follow DNS configuration instructions

### Option 2: Deploy via Netlify CLI (For Advanced Users)

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Navigate to project directory
cd /path/to/cutlyst

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Build Configuration

The project includes a `netlify.toml` file with the following configurations:

### Build Settings
```toml
[build]
  command = "pnpm install && pnpm build"
  functions = "netlify/functions"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "22.13.0"
  PNPM_VERSION = "10.4.1"
```

### Routing Configuration
- All non-file requests redirect to `index.html` for client-side routing
- This enables seamless navigation between pages (Home, About, Services, etc.)

### Caching Strategy
- **Static assets** (CSS, JS): Cached for 1 year (immutable)
- **Fonts**: Cached for 1 year (immutable)
- **HTML**: Not cached (always fresh)

### Security Headers
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: Disabled geolocation, microphone, camera

## Build Output

The production build creates:
- `dist/public/index.html` - Main HTML file (367.77 kB)
- `dist/public/assets/index-*.css` - Tailwind CSS styles (114.96 kB gzip)
- `dist/public/assets/index-*.js` - React application bundle (792.59 kB gzip)

**Total size**: ~1.2 MB (uncompressed), ~314 kB (gzipped)

## Environment Variables

Currently, the application doesn't require environment variables for basic functionality. If you need to add environment variables later:

1. Go to Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add your variables
4. Trigger a new deploy

## Troubleshooting

### Build Fails
**Error**: `pnpm: command not found`
- **Solution**: Netlify will automatically install pnpm 10.4.1 as specified in package.json

**Error**: `Node version mismatch`
- **Solution**: Verify Node version is set to 22.13.0 in netlify.toml

### Routes Not Working
**Issue**: Pages return 404 when accessing directly
- **Solution**: The netlify.toml includes a redirect rule that routes all requests to index.html for client-side routing. This is already configured.

### Slow Performance
**Issue**: Site loads slowly
- **Solution**: 
  - Clear Netlify cache: Site settings → Deploys → Clear cache and retry
  - Check bundle size (currently ~1.2 MB uncompressed)
  - Consider code splitting if bundle grows significantly

## Monitoring & Analytics

1. **Netlify Analytics**
   - Go to Analytics in your Netlify dashboard
   - Monitor traffic, performance, and errors

2. **Umami Analytics** (if configured)
   - Check analytics endpoint in environment variables
   - View visitor data and page performance

## Continuous Deployment

The site automatically redeploys when you:
- Push to the `main` branch on GitHub
- Merge a pull request to `main`

To disable auto-deploy:
- Site settings → Build & deploy → Deploy contexts
- Uncheck "Deploy on push"

## Performance Tips

1. **Optimize Images**
   - External images are already hosted on CDN
   - Use WebP format when possible

2. **Monitor Bundle Size**
   - Current: ~1.2 MB uncompressed, ~314 kB gzipped
   - Consider code splitting if adding more pages

3. **Cache Busting**
   - Netlify automatically handles cache busting with content hashes
   - No manual configuration needed

## Support

For issues or questions:
- Netlify Support: https://support.netlify.com
- GitHub Issues: https://github.com/tonniemungai/cutlyst/issues
- Documentation: https://docs.netlify.com

## Next Steps

1. Deploy to Netlify using the steps above
2. Test all pages and functionality
3. Set up custom domain
4. Configure analytics
5. Monitor performance and user feedback
