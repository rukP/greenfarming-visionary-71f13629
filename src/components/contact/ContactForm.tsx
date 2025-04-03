
import { useRef } from 'react';
import { Send } from 'lucide-react';
import { Textarea } from '../ui/textarea';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <form ref={formRef} className="glass p-8 rounded-2xl shadow-xl border border-sarura-100" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sarura-500 focus:border-transparent transition-all duration-300"
            placeholder="Your name"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sarura-500 focus:border-transparent transition-all duration-300"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
        <input 
          type="text"
          id="subject"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sarura-500 focus:border-transparent transition-all duration-300"
          placeholder="How can we help?"
          required
        />
      </div>
      
      <div className="space-y-2 mb-6">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <Textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sarura-500 focus:border-transparent resize-none transition-all duration-300"
          placeholder="Tell us more about your inquiry..."
          required
        />
      </div>
      
      <button 
        type="submit"
        className="btn-hover w-full flex items-center justify-center bg-sarura-500 text-white px-6 py-3.5 rounded-lg text-base font-medium shadow-lg shadow-sarura-500/20 hover:bg-sarura-600 transition-all duration-300 transform hover:scale-[1.02]"
      >
        <Send size={18} className="mr-2" />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
