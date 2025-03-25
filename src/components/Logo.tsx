
import React from 'react';
import { ToolIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link to="/" className={`flex items-center gap-2 font-medium ${sizeClasses[size]} ${className}`}>
      <ToolIcon className="text-blue-500" size={size === 'lg' ? 28 : size === 'md' ? 24 : 20} />
      <span className="font-semibold tracking-tight">Toolbox</span>
    </Link>
  );
};

export default Logo;
