import React from 'react';
import { SERVICE_AREAS } from '../data/siteData';

export const ServiceArea: React.FC = () => {
  return (
    <div className="py-8 text-center text-xs text-charcoal-500">
      Serving: {SERVICE_AREAS.join(', ')}
    </div>
  );
};
