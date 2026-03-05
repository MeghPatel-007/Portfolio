# 3D Developer Portfolio 🚀

An Interactive Developer Portfolio built with **React, Three.js, and modern web technologies**.

This project is a personal portfolio website showcasing my **projects, skills, editing work, and resume** through a modern UI with smooth animations and interactive 3D elements.

---

# ✨ Features

## Interactive 3D Experience

* 3D sword model rendered using **Three.js**
* Custom lighting setup
* Interactive WebGL scene using React Three Fiber

## Portfolio Sections

* Hero landing section
* About section
* Skills showcase
* Projects showcase with videos
* Editing/video work display
* Resume preview & download
* Contact section

## UI/UX

* Smooth scrolling navigation
* Responsive design
* Modular React component structure
* Loading animations

---

# 🛠 Tech Stack

## Frontend

* React (Vite)
* JSX
* CSS

## 3D Graphics

* Three.js
* React Three Fiber
* GLTF Models

## Assets

* Images
* Videos
* 3D models

---

# 📁 Project Structure

```
PORTFOLIO/
│
├── public/
│   ├── images/
│   │   ├── profile.png
│   │   ├── resume.jpg
│   │   └── sword.png
│   │
│   ├── models/
│   │   └── new sword.glb
│   │
│   ├── pdf/
│   │   └── resume.pdf
│   │
│   ├── videos/
│   │   ├── edits/
│   │   │   ├── Video-1.mov
│   │   │   ├── Video-2.mov
│   │   │   ├── Video-3.mov
│   │   │   ├── Video-4.mp4
│   │   │   ├── Video-5.mov
│   │   │   ├── Video-6.mov
│   │   │   ├── Video-7.mov
│   │   │   └── Video-8.mov
│   │   │
│   │   └── projects/
│   │       ├── gemini.mp4
│   │       ├── Lace Up.mp4
│   │       ├── netflix.mp4
│   │       ├── rps.mp4
│   │       └── tic tac toe.mp4
│   │
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── loader.jsx
│   │   │   ├── navbar.jsx
│   │   │   └── smoothreset.jsx
│   │   │
│   │   ├── three/
│   │   │   ├── Lighting.jsx
│   │   │   ├── SceneCanvas.jsx
│   │   │   └── SwordModel.jsx
│   │   │
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── contact.jsx
│   │       ├── contactextended.jsx
│   │       ├── editing.jsx
│   │       ├── Hero.jsx
│   │       ├── projects.jsx
│   │       ├── resume.jsx
│   │       └── skills.jsx
│   │
│   ├── store/
│   ├── styles/
│   │   ├── input.css
│   │   └── output.css
│   │
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

## Install Dependencies

```
npm install
```

## Run Development Server

```
npm run dev
```

The project will run at:

```
http://localhost:5173
```

---

# 📦 Build for Production

```
npm run build
```

---

# 🚀 Deployment

This project can be deployed easily on:

* Vercel
* Netlify
* GitHub Pages

For **Vercel deployment**:

```
npm install -g vercel
vercel
```

---

# 🎥 Project Showcase

The portfolio contains project demos including:

* Gemini AI project
* Netflix UI clone
* Rock Paper Scissors game
* Tic Tac Toe game
* Lace Up project

Each project includes **video previews inside the portfolio**.

---

# 📄 Resume

A downloadable resume is available inside the portfolio.

Location:

```
public/pdf/resume.pdf
```

---

# 👨‍💻 Author

Built by **Megh**

Computer Engineering Student
Frontend Developer • 3D Web Enthusiast • Video Editor

---
