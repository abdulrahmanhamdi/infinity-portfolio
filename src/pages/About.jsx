// src/pages/About.jsx
import AboutIntro from '../components/sections/AboutIntro';
import TimelineSection from '../components/sections/TimelineSection';
import SkillsSection from '../components/sections/SkillsSection'; 
import LanguagesSection from '../components/sections/LanguagesSection'; 
import InterestsSection from '../components/sections/InterestsSection';

export default function About() {
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