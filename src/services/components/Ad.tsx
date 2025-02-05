// src/services/components/Ad.tsx
import React, { useEffect, useRef } from 'react';
import { useAds } from '../useAds';
import './ad.css';

// TYPES
export interface AdProps {
  placement: string
  className?: string;
}
interface AdContent {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  sponsorName: string;
  sponsorUrl: string;
  imageUrl?: string;
}

export const Ad: React.FC<AdProps> = ({ placement, className = '' }) => {
  const { trackImpression, trackClick, getAdContent } = useAds();
  const adContent = getAdContent(placement);
  const hasTrackedImpression = useRef(false);

  useEffect(() => {
    if (adContent && !hasTrackedImpression.current) {
      trackImpression(placement, adContent.sponsorName);
      hasTrackedImpression.current = true;
    }
  
    return () => {
      hasTrackedImpression.current = false;
    };
  }, []);
  if (!adContent) return null;

  const handleClick = () => {
    trackClick(placement, adContent.sponsorName);
    window.open(adContent.ctaUrl, '_blank', 'noopener');
  };

  return (
    <div className={`ad-container ${className}`} data-placement={placement}>
      <div className="ad-content">
        {adContent.imageUrl && (
          <img 
            src={adContent.imageUrl} 
            alt={`Anuncio de ${adContent.sponsorName}`} 
            className="ad-image"
          />
        )}
        <h3 className="ad-title">{adContent.title}</h3>
        <p className="ad-description">{adContent.description}</p>
        <button onClick={handleClick} className="ad-cta">
          {adContent.ctaText}
        </button>
        <div className="ad-sponsor">
          <span>Presentado por </span>
          <a 
            href={adContent.sponsorUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick(placement, adContent.sponsorName, 'sponsor')}
          >
            {adContent.sponsorName}
          </a>
        </div>
      </div>
    </div>
  );
};