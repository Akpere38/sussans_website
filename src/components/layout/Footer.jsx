import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">CrossPay</h3>
            <p className="text-neutral-400 mb-4 max-w-md">
              Fast, secure cross-border payments for African businesses. Specializing in RMB ↔ NGN payments, international payments, and crypto OTC services.
            </p>
            <div className="space-y-2 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+234 801 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@crosspay.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-neutral-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/compliance" className="text-neutral-400 hover:text-white transition-colors">Compliance</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/compliance" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/compliance" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/compliance" className="text-neutral-400 hover:text-white transition-colors">AML Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; {currentYear} CrossPay. All rights reserved. Licensed and regulated financial service provider.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;