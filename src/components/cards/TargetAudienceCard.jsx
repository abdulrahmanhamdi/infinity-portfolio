// src/components/cards/TargetAudienceCard.jsx

export default function TargetAudienceCard({ item }) {
  return (
    <div className="audience-box">
      <i className={item.icon}></i>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  );
}