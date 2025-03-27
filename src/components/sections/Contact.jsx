// src/components/sections/Contact.jsx
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { FadeIn } from '../animations/FadeIn';

// Initialize EmailJS
const initializeEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.error('EmailJS public key is not defined in environment variables');
    return;
  }
  emailjs.init(publicKey);
};

function ContactInfo({ icon, title, content, href }) {
  const ContentWrapper = href ? 'a' : 'div';
  
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <ContentWrapper
          href={href}
          className={href ? 'text-blue-600 hover:text-blue-700 transition-colors' : 'text-gray-600'}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}

export function Contact() {
  const form = useRef();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    initializeEmailJS();
  }, []);

  const showAlert = (message, type = 'success') => {
    setAlertMessage(message);
    setAlertType(type);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      showAlert('Email service configuration is missing.', 'error');
      setIsSubmitting(false);
      return;
    }

    // Get current time in CST
    const cstTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    // Add the timestamp to the form data
    const formData = new FormData(form.current);
    formData.append('timestamp', cstTime);

    try {
      const result = await emailjs.sendForm(
        serviceId, // Your service ID
        templateId, // Your template ID
        form.current
      );

      if (result.status === 200) {
        showAlert('Message sent successfully! I will get back to you soon.');
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      showAlert(
        'Sorry, there was an error sending your message. Please try again later.',
        'error'
      );
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Let's Connect
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Feel free to reach out! 😄💻💾
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  content="nprasad2077@gmail.com"
                  href="mailto:nprasad2077@gmail.com"
                />
                <ContactInfo
                  icon={<Phone className="w-5 h-5" />}
                  title="Phone"
                  content="+1 (832) 464-5585"
                  href="tel:+18324645585"
                />
                <ContactInfo
                  icon={<MapPin className="w-5 h-5" />}
                  title="Location"
                  content="Houston, TX"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="relative">
              <form ref={form} onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    required
                  />
                </div>
                {/* Hidden timestamp field */}
                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString('en-US', {
                    timeZone: 'America/Chicago',
                    dateStyle: 'full',
                    timeStyle: 'long'
                  })}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-medium
                    ${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {alertVisible && (
                <div
                  role="alert"
                  className={`mt-4 px-4 py-3 rounded-lg w-full absolute bottom-0 left-0 ${
                    alertType === 'success'
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-red-100 text-red-700 border border-red-300'
                  }`}
                >
                  {alertMessage}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
