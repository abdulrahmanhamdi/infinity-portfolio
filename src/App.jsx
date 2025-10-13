// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import InfinityTeam from "./pages/InfinityTeam";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails"; // <-- 1. Make sure this import is here

// Other imports...
import BackToTopButton from './components/ui/BackToTopButton';
import CursorGlow from './components/ui/CursorGlow';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/infinity-team" element={<InfinityTeam />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* --- 2. THIS IS THE MISSING RULE --- */}
          {/* This rule tells the app what to do with links like "/course/algorithm-analysis" */}
          <Route path="/course/:slug" element={<CourseDetails />} />

        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
      <CursorGlow />
    </ThemeProvider>
  );
}

export default App;