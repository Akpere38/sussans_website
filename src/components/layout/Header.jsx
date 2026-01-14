import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white border-b border-neutral-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-700">CrossPay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-neutral-800 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button href="https://wa.me/2348012345678" variant="primary" className="text-sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-800 hover:bg-neutral-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-neutral-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button href="https://wa.me/2348012345678" variant="primary" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;