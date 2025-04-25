import React from 'react';
import { Link } from 'react-router-dom';
import { featureProps } from '../../home/featured/featureProps';

interface FeatureButtonTypes {
  feature: featureProps
  disabled?: boolean
  className?: string
}

const FeatureButton: React.FC<FeatureButtonTypes> = ({ feature, disabled, className = "" }) => {
  const buttonClasses = `
    px-4 py-2 rounded-md transition-colors
    ${disabled 
      ? 'bg-gray-400/70 text-gray-800 cursor-not-allowed' 
      : 'bg-white/90 text-black hover:bg-white'}
    ${className}
  `;

  return (
    <button 
      className={buttonClasses}
      disabled={disabled}
    >
      {!disabled && (
        <Link to={feature.path} className="text-inherit no-underline">
          {feature.button}
        </Link>
      )}
    </button>
  );
};

export default FeatureButton;