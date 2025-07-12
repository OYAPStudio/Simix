# Simix - Smart Building & Control Systems Website

A modern, responsive website for Simix, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between light and dark themes with persistent preferences
- **Fast Performance**: Static site generation for optimal loading speeds
- **SEO Optimized**: Built-in SEO optimization with meta tags and structured data
- **Accessible**: WCAG compliant with proper semantic markup
- **Type Safe**: Full TypeScript implementation for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes
- **SEO**: next-seo

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd simix-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
simix-website/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── footer.tsx
│   └── ...
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Color Palette

The website uses a carefully crafted color palette based on the provided brand colors:

- **Primary Light**: `#5F7DB7` (RGB: 95, 125, 183)
- **Primary Default**: `#354059` (RGB: 53, 64, 89)
- **Primary Dark**: `#696E82` (RGB: 105, 110, 130)
- **Secondary**: `#F2F4FF` (RGB: 242, 244, 255)

## 📱 Pages

- **Homepage** (`/`): Hero section, services overview, about summary, stats, CTA
- **About** (`/about`): Company story, values, timeline, team information
- **Services** (`/services`): Detailed service descriptions with features and benefits
- **Projects** (`/projects`): Portfolio of completed projects with case studies
- **Contact** (`/contact`): Contact form, office information, map integration

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (optional):

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Customization

1. **Colors**: Modify `tailwind.config.ts` to update the color scheme
2. **Content**: Update page content in respective component files
3. **Metadata**: Update SEO information in `app/layout.tsx`
4. **Contact Info**: Update contact details in `components/footer.tsx` and `app/contact/page.tsx`

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Static Export

This project is configured for static export:

```bash
npm run build
```

The built files will be in the `out/` directory, ready for deployment to any static hosting service.

## 🚀 Deployment Options

- **Vercel**: Deploy directly from Git repository
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Push the `out/` folder to gh-pages branch
- **AWS S3**: Upload the `out/` folder to S3 bucket
- **Any CDN**: Upload static files to your preferred CDN

## 🎯 Performance Features

- **Static Site Generation**: Pre-rendered pages for faster loading
- **Image Optimization**: Optimized images with Next.js Image component
- **Font Optimization**: Automatic font loading optimization
- **Code Splitting**: Automatic code splitting for smaller bundles
- **Tree Shaking**: Unused code elimination

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: Schema.org markup for better search results
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawler instructions

## 🎨 Animation Features

- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states on cards and buttons
- **Loading States**: Smooth loading animations for form submissions
- **Page Transitions**: Smooth transitions between pages
- **Parallax Effects**: Subtle parallax scrolling effects

## 📞 Support

For questions or support regarding this website:

- **Email**: info@simix.com
- **Phone**: +1 (234) 567-890
- **Website**: [https://simix.com](https://simix.com)

## 📄 License

This project is proprietary and confidential. All rights reserved by Simix.

---

Built with ❤️ by the Simix Team

لحلول الطاقة والانظة السيرة الذكية