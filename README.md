````bash
portfolio/
│
├── public/
│   ├── favicon.ico
│   ├── models/
│   │   └── hover_bike_-_the_rocket.glb
│   ├── videos/
│   │   ├── project1.mp4
│   │   └── project2.mp4
│   └── textures/
│       └── environment.hdr
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── logo.svg
│   │   ├── fonts/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── SectionWrapper.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── three/
│   │       ├── BikeModel.jsx
│   │       ├── SceneCanvas.jsx
│   │       └── Lighting.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── VideoEditing.jsx
│   │   ├── Resume.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Contact.jsx
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   ├── useMediaQuery.js
│   │   ├── useTheme.js
│   │   └── useBikeMotion.js   ← add this (controls hover bike)
│   │
│   ├── store/
│   │   └── useAppStore.js
│   │
│   ├── styles/
│   │   ├── tailwind.css       ← entry point for tailwind imports
│   │   ├── globals.css        ← your reset, layout, custom utilities
│   │   └── animations.css     ← custom keyframes or motion tweaks
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── motionConfig.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── vite-env.d.ts
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
````