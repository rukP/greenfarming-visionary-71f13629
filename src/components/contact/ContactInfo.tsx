
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

interface ContactInfoProps {
  socialLinks: { name: string; url: string }[];
}

const ContactInfo = ({ socialLinks }: ContactInfoProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-sarura-500">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-4 group">
          <div className="bg-sarura-100 p-2 rounded-lg group-hover:bg-sarura-200 transition-colors duration-300">
            <Mail className="w-5 h-5 text-sarura-500" />
          </div>
          <div>
            <p className="font-medium">Email Us</p>
            <a href="mailto:info@sarura.app" className="text-gray-600 hover:text-sarura-500 transition-colors">info@sarura.app</a>
          </div>
        </div>
        <div className="flex items-start space-x-4 group">
          <div className="bg-sarura-100 p-2 rounded-lg group-hover:bg-sarura-200 transition-colors duration-300">
            <Phone className="w-5 h-5 text-sarura-500" />
          </div>
          <div>
            <p className="font-medium">Call Us</p>
            <a href="tel:+250784148374" className="text-gray-600 hover:text-sarura-500 transition-colors">+250 784 148 374</a>
          </div>
        </div>
        <div className="flex items-start space-x-4 group">
          <div className="bg-sarura-100 p-2 rounded-lg group-hover:bg-sarura-200 transition-colors duration-300">
            <MapPin className="w-5 h-5 text-sarura-500" />
          </div>
          <div>
            <p className="font-medium">Visit Us</p>
            <p className="text-gray-600">Kigali, Rwanda</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 group">
          <div className="bg-sarura-100 p-2 rounded-lg group-hover:bg-sarura-200 transition-colors duration-300">
            <MessageSquare className="w-5 h-5 text-sarura-500" />
          </div>
          <div>
            <p className="font-medium">Social Media</p>
            <div className="flex space-x-3 mt-1">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url}
                  className="text-sarura-500 hover:text-sarura-600 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
