# Octagon Legal - Professional Law Firm Website

A comprehensive digital platform for Octagon Legal, offering modern and inclusive legal services with a focus on workplace misconduct, crisis intervention, and high-risk dispute resolution.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Professional Branding** - Clean, authoritative design with gold and navy color scheme
- **Interactive Elements** - Consultation booking modal, smooth scrolling navigation
- **Video Background** - Engaging hero section with professional video
- **Contact Forms** - Integrated consultation request system
- **Modern Tech Stack** - React, TypeScript, Tailwind CSS, Express.js

## 🚀 Quick Deploy to Vercel (FREE)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/octagon-legal.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project" → Import your repository
   - Deploy automatically

3. **Add Custom Domain**
   - In Vercel dashboard: Settings → Domains
   - Add your domain name
   - Update DNS settings as instructed
   - SSL certificate automatically provided

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
octagon-legal/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── vite.ts           # Vite development setup
├── shared/               # Shared types and schemas
├── public/               # Static assets
└── vercel.json          # Vercel deployment config
```

## 🎨 Design System

- **Colors**: Navy (#2C5282) and Gold (#D69E2E)
- **Typography**: Serif fonts for elegance and authority
- **Components**: Modern UI with Radix UI and Tailwind CSS
- **Responsive**: Mobile-first design approach

## 📧 Contact Integration

The website includes a fully functional consultation booking system. To enable email notifications:

1. Set up environment variables in Vercel:
   - `SENDGRID_API_KEY` (if using SendGrid)
   - Or configure your preferred email service

## 🔧 Technologies Used

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **UI Components**: Radix UI, Lucide React Icons
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Deployment**: Vercel (configured)

## 📱 Mobile Optimization

- Responsive navigation with mobile menu
- Touch-friendly interface elements
- Optimized images and video loading
- Fast loading times across all devices

## 🔒 Security & Performance

- Type-safe with TypeScript
- Form validation with Zod schemas
- Secure API endpoints
- Optimized bundle size
- Modern ES modules

## 📞 Support

For technical support or customization needs, contact the development team.

---

**Ready for deployment!** This professional website is optimized for law firms and includes all necessary configurations for free hosting on Vercel.