// src/components/sections/FeedbackSection.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSendFeedback = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      rating: rating,
      message: message,
    };

    // Safely read the FEEDBACK keys from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_FEEDBACK_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('✅ Feedback sent successfully!');
        setMessage('');
        setRating(0);
      })
      .catch((error) => {
        setStatus('❌ Failed to send feedback.');
        console.error(error);
      });
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <section className="feedback-section">
      <div className="container text-center">
        <h2 className="section-title">
          Your <span>Feedback</span>
        </h2>
        <p className="section-subtitle">
          Help us improve by sharing your thoughts.
        </p>

        <form onSubmit={handleSendFeedback} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="star-rating mb-4">
            {stars.map((star) => (
              <i
                key={star}
                className={`bi bi-star-fill ${(hoverRating || rating) >= star ? 'selected' : ''}`}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              ></i>
            ))}
          </div>

          <textarea
            name="message"
            className="form-control mb-3"
            rows="4"
            placeholder="Write your suggestion..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary w-100">
            Send Feedback
          </button>

          {status && <p className="mt-3">{status}</p>}
        </form>
      </div>
    </section>
  );
}