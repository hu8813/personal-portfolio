import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/personalInfo'; // Import your personal info

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{success?: boolean; message: string}>({ message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '' });

    try {
      // Initialize EmailJS with your public key from environment variable
      emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '');
      
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        }
      );

      setFormStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        success: false,
        message: 'Sorry, there was a problem sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{personalInfo.location}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>{personalInfo.email}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>{personalInfo.phone}</span>
          </div>
        </div>
        
        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={6}
            />
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {/* Status Message */}
          {formStatus.message && (
            <div className={`status-message ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;