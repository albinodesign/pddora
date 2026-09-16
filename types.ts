import React from 'react';

export interface ServiceCardDetails {
  whatIs: string;
  forWhom: string;
  costs: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: Record<string, string>;
  details?: ServiceCardDetails;
  cmsPrefix?: string;
}
