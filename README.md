# Wedding Biodata Landing Page

A modern, responsive single-page wedding biodata website built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Project Structure

- `src/components` - reusable UI components (navbar and shared UI primitives)
- `src/sections` - page sections (Hero, About, Professional, Family, Lifestyle, Gallery, Contact, Footer)
- `src/assets` - local placeholder profile and gallery assets
- `src/data/profileData.js` - all placeholder biodata content in one place

## Replace Placeholder Data

- Update profile details, contact details, family/professional/lifestyle text in `src/data/profileData.js`.
- Replace placeholder images in `src/assets/profile.svg` and `src/assets/gallery` with your real photos.
- Enable WhatsApp button by changing `showWhatsappButton` to `true` in `src/sections/Contact.jsx`.
