# **Personal Portfolio & Infinity Team Platform**

This is the official repository for my personal portfolio and the "Infinity Team" educational platform. It's a modern, single-page application built with React to showcase my skills, projects, and educational content in an interactive and visually appealing way.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](https://abdulrahmanhamdi.com.tr/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-abdulrahman--hamdi-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/abdulrahman-hamdi-54a8a6143/)

---
## **Table of Contents**
* [About The Project](#about-the-project)
* [Key Features](#key-features)
* [Built With](#built-with)
* [Screenshots](#screenshots)
* [Getting Started](#getting-started)
* [Deployment](#deployment)
* [Project Structure](#project-structure)
* [Contact](#contact)

---
## **About The Project**
This project serves two main purposes:
1.  **A Personal Portfolio**: A dynamic, professional space to showcase my software development projects, skills, and professional journey to potential employers and collaborators.
2.  **An Educational Hub**: An "Infinity Team" section dedicated to providing high-quality educational materials, including university course notes, video lectures, and exam solutions for computer science and engineering students.

The entire platform is designed with a strong focus on user experience, featuring a clean, responsive interface, smooth animations, and interactive elements.

---
## **Key Features**
**Dynamic Portfolio from Firestore**: The portfolio section is not static; it fetches project data in real-time from a Cloud Firestore database, allowing for easy updates without redeploying the site.

**Interactive Course Platform**: A dedicated section for courses, with each course having its own detailed page displaying materials like PDFs, lecture videos, and notes in an organized fashion.

**Advanced UI/UX**: The user interface is enhanced with modern features to create an engaging experience:
* **Light/Dark Mode**: A theme toggle that saves the user's preference in their browser.
* **Voice Search**: An advanced voice-activated search bar to easily navigate the site's content.
* **Cursor Glow Effect**: A subtle, aesthetic glow that follows the user's cursor across the screen.
* **Animations**: Smooth, scroll-based fade-in animations for a dynamic feel.

**Fully Responsive Design**: The layout is built with Bootstrap and custom CSS to ensure a seamless experience on all devices, from mobile phones to desktop computers.

**Backend-less Forms**: Contact and feedback forms are powered by EmailJS, allowing for direct email submissions without the need for a dedicated backend server.

---
## **Built With**
This project was built using a modern and powerful tech stack.

### **Frontend**
* **React.js**: The core library for building the user interface.
* **Vite**: A next-generation frontend build tool for a fast development experience.
* **React Router**: For client-side routing and navigation between pages.
* **Bootstrap**: For the responsive grid system and base components.
* **CSS3 & Custom Styling**: Heavily customized CSS with variables for theming, animations, and a unique design.
* **Swiper.js**: For the interactive and touch-friendly testimonials slider.
* **React CountUp**: For animating the numbers in the statistics section.

### **Backend & Services**
* **Firebase (Firestore)**: A NoSQL cloud database used to store and manage portfolio projects dynamically.
* **EmailJS**: A service used to power the contact and feedback forms without a server.

---
## **Screenshots**
Here are a few glimpses of the platform. (You can replace these with your own screenshots).

| Light Mode | Dark Mode |
| :---: | :---: |
| ![Light Mode](public/assets/screenshots/light-mode.png) | ![Dark Mode](public/assets/screenshots/dark-mode.png) |

| Portfolio Page | Course Details Page |
| :---: | :---: |
| ![Portfolio Page](public/assets/screenshots/portfolio-page.png) | ![Course Details Page](public/assets/screenshots/course-details-page.png) |

---
## **Getting Started**
To get a local copy up and running, follow these simple steps.

### **Prerequisites**
* Node.js (v18 or higher)
* npm or yarn package manager

### **Installation**
1.  **Clone the repository:**
    ```sh
    git clone [[https://github.com/abdulrahmanhamdi/infinity-portfolio.git](https://github.com/abdulrahmanhamdi/infinity-portfolio)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd infinity-portfolio
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    * Create a file named `.env.local` in the root of your project.
    * Copy the contents of `.env.example` (if you create one) or add the following keys. This is **crucial** for Firebase and EmailJS to work.
    ```env
    # Firebase Keys (from your Firebase project console)
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    # ... and other Firebase keys

    # EmailJS Keys (from your EmailJS account)
    VITE_EMAILJS_SERVICE_ID="YOUR_SERVICE_ID"
    VITE_EMAILJS_TEMPLATE_ID="YOUR_TEMPLATE_ID"
    VITE_EMAILJS_PUBLIC_KEY="YOUR_PUBLIC_KEY"
    ```
5.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

---
## **Deployment**
This Vite-based React application can be easily deployed to any static hosting service. The recommended method is using **Vercel** or **Netlify**.

### **Deploying with Vercel**
1.  Push your code to a GitHub repository.
2.  Sign up for a Vercel account and connect your GitHub.
3.  Create a "New Project" and select your repository.
4.  Vercel will automatically detect that it's a Vite project and configure the build settings.
5.  **Important**: Add your environment variables (from your `.env.local` file) in the Vercel project settings under "Environment Variables".
6.  Click "Deploy". Your site will be live in a few moments!

---
## **Project Structure**

The project follows a clean, component-based architecture that promotes reusability and maintainability.

```bash
src/
├── assets/         # Images, fonts, and other static files
├── components/     # Reusable UI components
│   ├── cards/      # Card-style components (ProjectCard, CourseCard)
│   ├── layout/     # Structural components (Navbar, Footer)
│   ├── sections/   # Major content blocks for pages (Hero, SkillsSection)
│   └── ui/         # General-purpose UI elements (Modal, Buttons, SearchBar)
├── context/        # React Context providers (ThemeContext)
├── data/           # Static data files (mock data, course info)
├── hooks/          # Custom React Hooks (useTheme, useSpeechRecognition)
├── pages/          # Top-level page components
├── services/       # Firebase and other external service configurations
├── styles/         # CSS files (Bootstrap, custom styles, theme)
├── App.jsx         # Main application component with routing
└── main.jsx        # Application entry point
```

---
## **Contact**

**Abdulrahman Hamdi**  
**Email**: [abdulrahmanh524@gmail.com](mailto:abdulrahmanh524@gmail.com)  
**LinkedIn**: [linkedin.com/in/abdulrahman-hamdi](https://www.linkedin.com/in/abdulrahman-hamdi-54a8a6143/)  
**GitHub**: [github.com/abdulrahmanhamdi](https://github.com/abdulrahmanhamdi)
