import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  href, 
  onClick,
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : '_self'} rel={href.startsWith('http') ? 'noopener noreferrer' : ''}>
        {children}
        {icon && <ArrowRight size={18} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
};

export default Button;