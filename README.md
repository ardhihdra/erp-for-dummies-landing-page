# ERP for Dummies - Landing Page

Modern landing page for ERP system designed for small and medium businesses.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS
- 🎯 Industry-specific solutions showcase
- 📊 Interactive industry selector

## Pages

1. **Home Page** - Main landing page with:
   - Hero section with value proposition
   - Services overview (4 main benefits)
   - How it Works section with industry selector
   - Contact information in footer

2. **Solution Detail Pages** - Industry-specific pages:
   - Fashion Manufacturing ERP (`/solutions/fashion-manufacture`)
   - More industries coming soon

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom UI components

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── solutions/
│       └── fashion-manufacture/
│           └── page.tsx      # Fashion manufacturing detail page
└── components/
    └── ui/                   # Reusable UI components
```

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

## License

MIT

## Contact

For inquiries, please contact: support@hive-erp.com
