// src/pages/About.jsx
import { useEffect } from 'react';
import AboutIntro from '../components/sections/AboutIntro';
import TimelineSection from '../components/sections/TimelineSection';
import SkillsSection from '../components/sections/SkillsSection'; 
import LanguagesSection from '../components/sections/LanguagesSection'; 
import InterestsSection from '../components/sections/InterestsSection';

export default function About() {
    useEffect(() => {
    document.title = "About Me | Abdulrahman Hamdi";
  }, []);
  return (
    <div>
      <AboutIntro />
      <TimelineSection />
      <SkillsSection />
      <LanguagesSection />
      <InterestsSection />
    </div>
  );
}