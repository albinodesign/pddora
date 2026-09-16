import React from 'react';
import { ICONS } from '@/constants';
import type { ServiceCardProps } from '@/types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features, cmsPrefix }) => {
  return (
    <div className="group bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-brand/5 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {icon && (
        <div className="w-20 h-20 bg-brand-accent rounded-[1.5rem] flex items-center justify-center text-brand mb-8 transform group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
          {icon}
        </div>
      )}
      <h3 className="text-3xl font-serif font-bold text-brand mb-6 leading-tight" data-cms-field={cmsPrefix ? `${cmsPrefix}.title` : undefined}>{title}</h3>
      <p className="text-gray-600 mb-10 text-lg leading-relaxed flex-grow" data-cms-field={cmsPrefix ? `${cmsPrefix}.description` : undefined}>{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-4 pt-8 border-t border-brand/10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.15em] text-brand/60">
              <ICONS.Check className="w-5 h-5 text-brand" />
              <span data-cms-field={cmsPrefix ? `${cmsPrefix}.features.${idx}` : undefined}>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
