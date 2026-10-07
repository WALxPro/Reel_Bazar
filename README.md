# Hero Section (React + Tailwind)

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Apni video lagane ka tareeqa

1. Apni video file ko `public/` folder mein copy karein, e.g. `public/hero.mp4`.
2. `src/components/Hero.jsx` mein `<source>` line ko uncomment karke path set karein:

   ```jsx
   <source src="/hero.mp4" type="video/mp4" />
   ```

3. Agar koi poster/thumbnail image chahiye jab tak video load ho, `poster="/your-poster.jpg"` line bhi uncomment kar dein (image ko bhi `public/` mein rakhein).

Jab tak video nahi lagayenge, background par ek purple gradient placeholder dikhega — layout waisa hi rahega.

## Folder structure

```
hero-project/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── (apni video/poster yahan daalen)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        └── Hero.jsx
```
