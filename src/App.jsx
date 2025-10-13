import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home"; 
import Portfolio from "./pages/Portfolio";
import InfinityTeam from "./pages/InfinityTeam";  
import About from "./pages/About"; 
import Contact from './pages/Contact';
import BackToTopButton from './components/ui/BackToTopButton';
import CursorGlow from './components/ui/CursorGlow';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 120px)" }}> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/infinity-team" element={<InfinityTeam/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
      <CursorGlow />
    </ThemeProvider>
  );
}

export default App;