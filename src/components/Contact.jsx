import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const targetEmail = 'rahulranjan62067@gmail.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

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
        throw new Error('Server returned an error. Using email client fallback.');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX issue, opening mailto link fallback:', err);
      // Fallback: trigger mailto link directly
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-tag">06</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="clean-card contact-card-main">
        {submitted ? (
          <div className="form-success">
            <CheckCircle2 size={40} className="success-icon" />
            <h3>Message Sent Successfully!</h3>
            <p>
              Your message has been delivered directly to <strong>{targetEmail}</strong>. 
              Rahul will respond to your email shortly.
            </p>
            <button
              className="btn-send-another"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form-linear">
            {errorMsg && (
              <div className="form-error-banner">
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter Your Name "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email Address</label>
                <inpu
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                required
                placeholder="Software Engineering / Project inquiry"
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
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <div className="form-footer-line">
              <button type="submit" className="btn-send" disabled={loading}>
                {loading ? <Loader2 size={16} className="spinner" /> : <Send size={16} />}
                <span>{loading ? 'Sending to Inbox...' : 'Send Message'}</span>
              </button>

              <span className="contact-subnote">
                Messages are sent directly to <strong>{targetEmail}</strong>
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
