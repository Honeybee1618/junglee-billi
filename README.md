# Junglee Billa - Portfolio Website

A futuristic portfolio website built with Vanilla JavaScript, CSS Modules, and modern web technologies.

## 🎨 Design Features
- **Theme:** Futuristic with Purple Galaxy color scheme
- **Aesthetic:** Dark backgrounds with neon accents (Cyan #00FFFF, Green #00FF88)
- **Animations:** Heavy parallax scrolling, complex entrance animations, 3D transforms
- **Layout:** Magazine-style asymmetric editorial layout

## 🏗️ Project Structure

```
junglee-billa/
├── public/
│   ├── index.html
│   ├── css/
│   │   ├── global.css
│   │   ├── design-system.css
│   │   └── animations.css
│   └── assets/
│       └── images/
├── src/
│   ├── js/
│   │   ├── main.js
│   │   ├── auth.js
│   │   ├── api.js
│   │   └── utils/
│   ├── components/
│   │   ├── header.js
│   │   ├── footer.js
│   │   ├── navigation.js
│   │   └── [components]
│   └── pages/
│       ├── home.js
│       ├── about.js
│       ├── contact.js
│       ├── portfolio.js
│       ├── services.js
│       ├── gallery.js
│       ├── blog.js
│       ├── login.js
│       └── profile.js
├── server.js
├── package.json
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- npm or yarn
- MySQL database
- Auth0 account
- Firebase project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Honeybee1618/junglee-billi.git
cd junglee-billi
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your credentials
```

4. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

## 📄 Pages

- **/** - Home page with hero section and portfolio showcase
- **/about** - About page with biography and skills
- **/contact** - Contact page with contact form
- **/portfolio** - Portfolio page with project grid
- **/services** - Services page with offerings
- **/gallery** - Gallery page with media showcase
- **/blog** - Blog page with articles
- **/login** - Authentication login page
- **/profile** - User profile page

## 🎯 Features

✅ Fully responsive design (Desktop-first)
✅ SEO optimized with meta tags
✅ WCAG 2.1 AA accessibility compliance
✅ Firebase authentication integration
✅ Auth0 single sign-on
✅ MySQL database integration
✅ Parallax scrolling effects
✅ Loading states and error handling
✅ Dark mode futuristic theme
✅ Mobile-optimized performance

## 🔐 Authentication

This project uses Auth0 for secure authentication. Configure your Auth0 domain and credentials in the `.env` file.

## 📱 Performance

- Core Web Vitals optimized (LCP < 2.5s, CLS < 0.1, FID < 100ms)
- Lazy loading for images
- CSS Modules for optimized styling
- Minimal bundle size

## 🌐 Deployment

This project is configured for VPS deployment. See `deployment/` for configuration files.

## 📝 License

MIT License - See LICENSE file for details

## 👤 Author

Honeybee1618
