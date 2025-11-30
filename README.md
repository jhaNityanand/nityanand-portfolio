# Nityanand Jha - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my work as a Senior PHP & Automation Developer. This portfolio features a clean, colorful design with smooth animations and a fully responsive layout.

## 🌟 Features

- **Modern UI/UX**: Beautiful, colorful design with glassmorphism effects and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Performance**: Built with Next.js 16 and optimized for production
- **Contact Form**: Functional contact form with email integration support
- **Project Showcase**: Organized display of projects by category (Lovable, Laravel, Web Projects)
- **Resume Download**: Easy access to downloadable PDF resume
- **Smooth Animations**: Engaging hover effects and transitions throughout
- **Back to Top Button**: Convenient navigation for long pages
- **SEO Optimized**: Proper metadata and semantic HTML

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom React components
- **Deployment**: Vercel-ready

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

## 🔧 Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/jhaNityanand/nityanand-portfolio.git
```

### 2. Navigate to Project Directory

```bash
cd nityanand-portfolio
```

### 3. Install Dependencies

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

### 4. Run Development Server

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

### 5. Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
nityanand-portfolio/
├── public/
│   ├── images/
│   │   └── profile-pic.jpg
│   └── resume/
│       └── resume-nityanand.pdf
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── BackToTop.js
│       ├── Experience.js
│       ├── Footer.js
│       ├── Header.js
│       ├── Hero.js
│       ├── ProjectsGrid.js
│       └── Skills.js
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📧 Contact Form Configuration

The contact form is ready for email integration. To enable email functionality:

1. **Using Nodemailer** (already included in dependencies):
   - Set up environment variables in `.env.local`:
   ```env
   MAIL_HOST=your-smtp-host
   MAIL_PORT=587
   MAIL_USER=your-email@example.com
   MAIL_PASS=your-password
   MAIL_EMAIL=in.jha357@gmail.com
   ```
   - Uncomment the email sending code in `src/app/api/contact/route.ts`

2. **Using Resend** (alternative):
   - Install Resend: `npm install resend`
   - Get API key from [Resend](https://resend.com)
   - Update the contact route accordingly

## 🎨 Customization

### Update Personal Information

1. **Profile Information**: Edit `src/components/Hero.js`
2. **Skills**: Update `src/components/Skills.js`
3. **Experience**: Modify `src/components/Experience.js`
4. **Projects**: Edit `src/components/ProjectsGrid.js`
5. **Contact Details**: Update `src/app/contact/page.tsx` and `src/components/Footer.js`

### Change Colors

Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
  // ...
}
```

### Update Profile Picture

Replace `public/images/profile-pic.jpg` with your own image (recommended size: 400x400px or larger).

### Update Resume PDF

Replace `public/resume/resume-nityanand.pdf` with your resume PDF.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Add environment variables if using email functionality
5. Deploy!

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Nityanand Jha**

- Portfolio: [Live Site](https://your-portfolio-url.vercel.app)
- LinkedIn: [@nityanand-jha-788711271](https://www.linkedin.com/in/nityanand-jha-788711271/)
- GitHub: [@jhaNityanand](https://github.com/jhaNityanand)
- Email: in.jha357@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and UI inspiration from modern web design trends

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!
