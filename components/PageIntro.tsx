
import React from 'react';

interface PageIntroProps {
  title: string;
  description: string;
  accent?: string;
}

const PageIntro: React.FC<PageIntroProps> = ({ title, description, accent }) => {
  return (
    <section className="relative pt-32 pb-20 bg-brand overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {accent && (
          <span className="inline-block text-brand-accent text-xs font-black uppercase tracking-[0.3em] mb-4">
            {accent}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-8 rounded-full"></div>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-accent/80 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageIntro;
