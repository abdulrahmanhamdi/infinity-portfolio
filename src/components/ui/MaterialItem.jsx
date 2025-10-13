// src/components/ui/MaterialItem.jsx

export default function MaterialItem({ item }) {
  return (
    <li>
      {item.name}
      {item.link ? (
        <a href={item.link} className="resource-link" target="_blank" rel="noopener noreferrer">
          {item.type === 'pdf' ? 'Download' : 'Watch'}
        </a>
      ) : (
        <span className="resource-link-text">{item.text}</span> // For "Soon.." text
      )}
    </li>
  );
}