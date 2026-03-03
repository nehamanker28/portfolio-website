# Portfolio Website (React + Tailwind CSS)

Modern, responsive, production-ready portfolio inspired by the structure and UX patterns of https://ravirajkatkar.github.io/, customized for a Senior Mobile Developer profile.

## 1) Design Analysis (Reference Website)

### Sections identified
- Hero
- About
- Skills / Tech Stack
- Experience Timeline
- Projects
- Achievements / Highlights
- Contact + Social
- Footer

### Layout structure
- One-page layout with sticky navigation and anchor links
- Vertical section flow with clear heading hierarchy
- Card-based content for projects and experience

### Animation style
- Subtle reveal-on-scroll transitions
- Soft hover elevation and border emphasis
- Smooth anchor scrolling

### Typography & spacing patterns
- Clean sans-serif typography
- Strong contrast for headings, muted body copy
- Generous vertical spacing and readable line lengths

### Color theme
- Dark-first UI
- Cyan/teal accent highlights
- Low-contrast borders and surface layers for depth

### Responsiveness behavior
- Mobile-first stacking
- Tablet and desktop progressive grid expansion
- Sticky top navigation retained across breakpoints

## 2) Tech Stack Choice

- React + Vite: component reusability and maintainable structure
- Tailwind CSS (v4): fast styling workflow and consistent responsive utility patterns
- Vanilla IntersectionObserver: lightweight scroll reveal (no animation library overhead)

## 3) Folder Structure

```txt
portfolio-website/
├── index.html
├── package.json
├── postcss.config.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SectionHeading.jsx
│   │   └── SkillsSection.jsx
│   └── data/
│       └── portfolioData.js
└── public/
```

## 4) Included Sections

- Hero section (name/title/CTA)
- About me
- Skills (progress bars + tags)
- Projects (GitHub + Live links)
- Experience timeline
- Contact form
- Social links

## 5) Production Requirements Coverage

- Clean UI: consistent cards, spacing, and hierarchy
- Professional typography: high readability and contrast
- Optimized performance: lightweight animations and static content flow
- SEO-friendly: title + meta description + OG basics in `index.html`
- Accessibility: semantic sections, labels, keyboard-focusable links, skip-link
- Easy customization: all main content centralized in `src/data/portfolioData.js`

## 6) Personalization Included

- Senior Mobile Developer profile
- React Native + iOS expertise emphasis
- 6+ years experience representation
- System design and AI/tech interests
- Dubai opportunity targeting

## 7) Local Development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## 8) Deploy to GitHub Pages

1. Install deployment package:

```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:

```json
{
	"homepage": "https://<your-username>.github.io/<repo-name>",
	"scripts": {
		"predeploy": "npm run build",
		"deploy": "gh-pages -d dist"
	}
}
```

3. Deploy:

```bash
npm run deploy
```

## 9) How to Customize

- Edit personal content: `src/data/portfolioData.js`
	- headline, summary, stats, skills, projects, timeline, links
- Update contact handler in `src/components/ContactSection.jsx`
	- replace Formspree endpoint with your own form backend
- Update SEO details in `index.html`
	- title, description, author, OG metadata

## 10) Suggestions for Improvement

- Add dark/light theme toggle with persisted preference
- Add blog/articles section for thought leadership
- Add project detail pages with case-study structure
- Add analytics and event tracking for CTA clicks
- Add automated Lighthouse checks in CI
