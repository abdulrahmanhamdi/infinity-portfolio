// src/pages/Home.jsx
import Hero from '../components/sections/Hero';
import { useEffect } from 'react';
import ProjectsSection from '../components/sections/ProjectsSection';
import CertificatesSection from '../components/sections/CertificatesSection';
import MissionSection from '../components/sections/MissionSection';
import ContactBanner from '../components/sections/ContactBanner';
import FeedbackSection from '../components/sections/FeedbackSection';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';

export default function Home() {
      useEffect(() => {
    document.title = "Home | Abdulrahman Hamdi";
  }, []);

  return (
    <div>
    <Hero />

    <FadeInWhenVisible>
        <ProjectsSection />
    </FadeInWhenVisible>

    <FadeInWhenVisible>
        <CertificatesSection />
    </FadeInWhenVisible>

    <FadeInWhenVisible>
        <MissionSection />
    </FadeInWhenVisible>

    <FadeInWhenVisible>
        <ContactBanner />
    </FadeInWhenVisible>

    <FadeInWhenVisible>
        <FeedbackSection />
    </FadeInWhenVisible>
    </div>

  );
}