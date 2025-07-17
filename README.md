# Michael Yang - Personal Webpage

A modern, responsive personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features a clean design with dark/light theme support, visitor counter, and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme Support**: Dark and light mode with smooth transitions
- **Visitor Counter**: Real-time visitor tracking with local JSON storage
- **Smooth Animations**: Enhanced user experience with CSS transitions
- **SEO Optimized**: Built-in SEO features with Next.js
- **Performance**: Optimized with Turbopack for faster development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.17 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

To check your Node.js version:
```bash
node --version
```

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Michael-Yang0922/Michael-Yang-Personal-WebPage.git
cd Michael-Yang-Personal-WebPage/personal-webpage
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

Or using pnpm:
```bash
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

Or using pnpm:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
personal-webpage/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── experience/        # Experience page
│   │   ├── projects/          # Projects pages
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── About/            # About section component
│   │   ├── Contact/          # Contact section
│   │   ├── Education/        # Education section
│   │   ├── Experience/       # Experience section
│   │   ├── Footer/           # Footer component
│   │   ├── Header/           # Header component
│   │   ├── Hero/             # Hero section
│   │   ├── Projects/         # Projects section
│   │   └── ui/               # Reusable UI components
│   ├── content/              # Content data files
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions
├── public/                   # Static assets
│   ├── documents/           # PDF files and documents
│   ├── images/              # Image assets
│   └── icon/                # Icon images
├── data/                    # Local data storage (auto-generated)
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Content Management

All content is managed through TypeScript files in the `src/content/` directory:

- `about.ts` - About section content
- `experience.ts` - Work experience data
- `education.ts` - Educational background
- `projects.ts` - Project portfolio
- `technicalSkills.ts` - Technical skills
- `hero.ts` - Hero section content

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors and themes in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual component files

### Images and Assets

- Add images to `public/images/`
- Add icons to `public/icon/`
- Add documents to `public/documents/`

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📊 Visitor Counter

The website includes a visitor counter that:

- Tracks unique visits using a local JSON file
- Stores data in `data/visits.json` (auto-generated)
- Provides API endpoints at `/api/visitors`
- Updates in real-time

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a React component as default

### Adding New Components

1. Create a new directory in `src/components/`
2. Add an `index.tsx` file
3. Export your component

### API Routes

- API routes are located in `src/app/api/`
- Each route should export HTTP method handlers (GET, POST, etc.)

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Node modules issues**
   ```bash
   # Clear node modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

## 📝 License

This project is personal and private. All rights reserved.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Made with ❤️ using Next.js, React, and Tailwind CSS
