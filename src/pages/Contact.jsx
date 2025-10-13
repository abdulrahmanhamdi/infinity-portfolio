// src/pages/Contact.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import FadeInWhenVisible from '../components/ui/FadeInWhenVisible';
import ContactInfoCard from '../components/cards/ContactInfoCard';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.send(serviceID, templateID, formState, publicKey)
      .then(() => {
        setStatus('✅ Message sent successfully!');
        setFormState({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('❌ Failed to send message.');
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <div className="container py-5">
      <FadeInWhenVisible>
        <div className="text-center mb-5">
          <h1 className="section-title">Get In <span>Touch</span></h1>
          <p className="section-subtitle">Have a question or want to work together? I’d love to hear from you.</p>
        </div>
      </FadeInWhenVisible>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <ContactInfoCard icon="bi bi-envelope-fill" title="Email" text="abdulrahmanh524@gmail.com" link="mailto:abdulrahmanh524@gmail.com" />
        </div>
        <div className="col-md-4">
          <ContactInfoCard icon="bi bi-telephone-fill" title="Phone" text="+90 531 455 1282" link="tel:+905314551282" />
        </div>
        <div className="col-md-4">
          <ContactInfoCard icon="bi bi-linkedin" title="LinkedIn" text="in/abdulrahman-hamdi" link="https://linkedin.com/in/abdulrahman-hamdi-54a8a6143/" />
        </div>
      </div>

      <FadeInWhenVisible>
        <form onSubmit={handleSubmit} className="contact-form mx-auto">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formState.message} onChange={handleInputChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
          {status && <p className="text-center mt-3">{status}</p>}
        </form>
      </FadeInWhenVisible>
    </div>
  );
}