// src/components/cards/ContactInfoCard.jsx

export default function ContactInfoCard({ icon, title, text, link }) {
  return (
    <div className="contact-info-card">
      <i className={icon}></i>
      <strong>{title}</strong>
      <a href={link}>{text}</a>
    </div>
  );
}