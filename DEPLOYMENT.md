# Deployment Guide for AnchorHood Website

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest way to deploy Next.js websites and offers a free tier.

### Method A: Using Vercel Website (Easiest)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login (free account)

2. **Click "Add New Project"**

3. **Import your Git repository** (if you push to GitHub/GitLab) OR:
   - **Drag and drop** your project folder directly to Vercel
   - Or use **Vercel CLI** (see Method B below)

4. **Configure your project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

5. **Click "Deploy"** - Your site will be live in minutes!

6. **Your site URL** will be something like: `anchorhood-website.vercel.app`

### Method B: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts** - it will ask you to link to a project or create a new one

5. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Option 2: Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)** and sign up/login

2. **Drag and drop** your `.next` folder OR connect to Git

3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

## Option 3: Deploy to GitHub Pages

The project is now configured for static export. Follow these steps:

### Step 1: Build the Static Site

Run the build command to generate static HTML files:

```bash
npm run build
```

This will create an `out` directory containing all the static HTML files.

### Step 2: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository** and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Configure GitHub Pages

1. **Go to your repository on GitHub**
2. **Click on "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source"**, select:
   - **Branch**: `main` (or `gh-pages` if you prefer)
   - **Folder**: `/ (root)` or `/out` (depending on your setup)
5. **Click "Save"**

### Step 4: Set up GitHub Actions (Recommended)

Create a `.github/workflows/deploy.yml` file to automatically build and deploy:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

Then update GitHub Pages settings to use the `gh-pages` branch.

### Alternative: Manual Deployment

If you prefer manual deployment:

1. Build the site: `npm run build`
2. Copy the contents of the `out` folder
3. Create a `gh-pages` branch
4. Push the `out` folder contents to the `gh-pages` branch
5. GitHub Pages will automatically serve from that branch

**Note**: Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Quick Deploy Commands

### Using Vercel CLI (Recommended):
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Using Netlify CLI:
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Important Notes:

- ✅ Your build is working correctly (tested successfully)
- ✅ All dependencies are installed
- ✅ The website is ready to deploy
- 📝 You may want to push to GitHub first for version control

## Next Steps After Deployment:

1. **Custom Domain**: Add your own domain in Vercel/Netlify settings
2. **Environment Variables**: Add any API keys or environment variables if needed
3. **Analytics**: Enable analytics to track visitors
4. **SSL Certificate**: Automatically provided by Vercel/Netlify (HTTPS)

---

**Recommended**: Use Vercel for the easiest deployment experience with Next.js!

