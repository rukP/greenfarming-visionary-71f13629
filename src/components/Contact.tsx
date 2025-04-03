
import { useEffect, useRef } from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import BusinessHours from './contact/BusinessHours';
import SupportCard from './contact/SupportCard';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
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
    
    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }
    
    if (infoRef.current) {
      observer.observe(infoRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (formContainerRef.current) observer.unobserve(formContainerRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  const socialLinks = [
    { name: "Facebook", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-sarura-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sarura-500">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about Sarura? We're here to help! Reach out to our team and we'll get back to you soon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="section-fade-in" ref={formContainerRef}>
            <ContactForm />
          </div>
          
          <div className="section-fade-in" ref={infoRef}>
            <div className="space-y-10">
              <ContactInfo socialLinks={socialLinks} />
              <BusinessHours />
              <SupportCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
