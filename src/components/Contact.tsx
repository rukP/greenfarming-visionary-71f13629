
import { useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about Sarura? We're here to help! Reach out to our team and we'll get back to you soon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="section-fade-in">
            <form className="glass p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sarura-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sarura-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <input 
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sarura-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sarura-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="btn-hover w-full flex items-center justify-center bg-sarura-500 text-white px-6 py-3.5 rounded-lg text-base font-medium shadow-lg shadow-sarura-500/20"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          <div className="section-fade-in">
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-sarura-500 mt-1" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <a href="mailto:info@sarura.app" className="text-gray-600 hover:text-sarura-500">info@sarura.app</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-sarura-500 mt-1" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+250780000000" className="text-gray-600 hover:text-sarura-500">+250 780 000 000</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-sarura-500 mt-1" />
                    <div>
                      <p className="font-medium">Visit Us</p>
                      <p className="text-gray-600">Kigali Innovation City, Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-sarura-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-sarura-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Need urgent support?</h4>
                    <p className="text-sm text-gray-600">Our support team is available 24/7</p>
                  </div>
                </div>
                <a 
                  href="tel:+250780000000"
                  className="btn-hover mt-4 w-full flex items-center justify-center border border-sarura-500 text-sarura-500 px-5 py-3 rounded-lg text-base font-medium hover:bg-sarura-50 transition-colors"
                >
                  Call Support Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
