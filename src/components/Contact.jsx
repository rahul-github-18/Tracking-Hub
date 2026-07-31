import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const targetEmail = 'rahulranjan62067@gmail.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}: ${formData.subject}`,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Fallback trigger');
      }
    } catch (err) {
      console.warn('FormSubmit fallback:', err);
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { label: 'Email', value: 'rahulranjan62067@gmail.com', href: 'mailto:rahulranjan62067@gmail.com', icon: Mail },
    { label: 'Phone', value: '+91-6206789352', href: 'tel:+916206789352', icon: Phone },
    { label: 'Location', value: 'Ranchi, Jharkhand, India', href: 'https://maps.google.com/?q=Ranchi,Jharkhand,India', icon: MapPin },
    { label: 'GitHub', value: 'github.com/rahul-github-18', href: 'https://github.com/rahul-github-18', icon: GithubIcon },
    { label: 'LinkedIn', value: 'linkedin.com/in/rahul-ranjan-6b2ab424a', href: 'https://linkedin.com/in/rahul-ranjan-6b2ab424a', icon: LinkedinIcon }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="contact-grid">
        {/* Left Side: Simple List (No Card) */}
        <div className="contact-left-list">
          {contactItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="contact-simple-link"
              >
                <Icon size={15} className="contact-link-icon" />
                <span className="contact-link-label">{item.label}:</span>
                <span className="contact-link-val">{item.value}</span>
                <ArrowUpRight size={12} className="contact-arrow" />
              </a>
            );
          })}
        </div>

        {/* Right Side: Contact Form (Subtle Card Only) */}
        <div className="contact-right-form">
          <div className="clean-card contact-form-card">
            {submitted ? (
              <div className="form-success-state">
                <CheckCircle2 size={32} className="success-icon" />
                <h3>Message Sent</h3>
                <p>Your message was sent to <strong>{targetEmail}</strong>.</p>
                <button className="btn-reset" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Write message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-submit-form" disabled={loading}>
                  {loading ? <Loader2 size={14} className="spinner" /> : <Send size={14} />}
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
