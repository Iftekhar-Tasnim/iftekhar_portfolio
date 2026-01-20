# Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full Stack Developer. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Smooth Animations** - Smooth transitions and hover effects throughout
- **Modern UI/UX** - Clean, professional design with dark theme
- **Contact Form** - Integrated contact form with Netlify Forms
- **Project Showcase** - Display of best projects with Frontend/Backend badges
- **Skills Section** - Organized technical skills by category
- **Experience Timeline** - Professional experience with company links
- **Resume Download** - Modal with downloadable resume
- **Smooth Scrolling** - Navigation with smooth scroll to sections

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Scroll** - Smooth scrolling navigation
- **React Router DOM** - Routing (if needed)

### Services
- **Netlify Forms** - Built-in contact form handling with spam protection

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Iftekhar-Tasnim/iftekhar_portfolio.git
cd iftekhar_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/           # Images and static assets
├── components/
│   ├── Layout/      # Navbar, Footer, ResumeModal
│   ├── Sections/    # Hero, About, Skills, Projects, etc.
│   └── UI/          # Reusable UI components
├── data/            # Profile, projects, experience data
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles and Tailwind imports
```

## 🎨 Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Personal background and profile image
3. **Technical Skills** - Categorized technical expertise
4. **Experience** - Professional work experience timeline
5. **Projects** - Showcase of best projects with links
6. **Contact** - Contact form and social links
7. **Personal** - Philosophy and hobbies

## 🔧 Configuration

### Netlify Forms Setup
See `NETLIFY_FORMS_SETUP.md` for detailed Netlify Forms configuration instructions.

### Skills Configuration
Skills are defined in `src/data/profile.js` and displayed in the Skills section. See `cv_skill.txt` for portfolio vs CV skill formatting guidelines.

## 📝 Customization

### Update Personal Information
Edit `src/data/profile.js` to update:
- Personal details (name, email, social links)
- Education history
- Skills and technologies
- Philosophy and hobbies

### Update Projects
Edit `src/data/projects.js` to add/remove projects:
- Project title and description
- Technologies used
- GitHub links (frontend/backend)
- Live demo links

### Update Experience
Edit `src/data/experience.js` to update work experience:
- Job roles and companies
- Time periods
- Descriptions
- Company links

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables
5. Deploy

### GitHub Pages
1. Build the project: `npm run build`
2. Follow GitHub Pages deployment guide
3. Update base path in `vite.config.js` if needed

## 📄 License

This project is private and personal portfolio.

## 👤 Author

**Iftekhar Tasnim Md. Asif**
- Email: iftekhartasnim@gmail.com
- LinkedIn: [Iftekhar Tasnim](https://www.linkedin.com/in/iftekhartasnim/)
- GitHub: [Iftekhar-Tasnim](https://github.com/Iftekhar-Tasnim)
- Portfolio: [Live Site](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from various open-source icon libraries
- Fonts: Outfit (Google Fonts) and JetBrains Mono

---

Built with ❤️ using React and Vite
