// src/components/cards/CertificateCard.jsx

export default function CertificateCard({ certificate }) {
  return (
    <div className="certificate-card">
      <h3>{certificate.title}</h3>
      <p className="description">{certificate.description}</p>
      <div className="issuer-info">
        <p className="issuer-name">{certificate.issuer}</p>
        <p className="issuer-category">{certificate.category}</p>
      </div>
    </div>
  );
}