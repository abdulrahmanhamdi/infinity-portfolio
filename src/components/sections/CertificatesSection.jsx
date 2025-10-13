// src/components/sections/CertificatesSection.jsx
import { certificatesData } from '../../data/certificates';
import CertificateCard from '../cards/CertificateCard';

export default function CertificatesSection() {
  return (
    <section className="certificates-section">
      <div className="container text-center">
        <h2 className="section-title">
          My <span>Programming Journey</span>
        </h2>
        <p className="section-subtitle">
          A collection of certificates earned through dedication and learning.
        </p>
        <div className="certificate-grid">
          {certificatesData.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}