import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  id: number;
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlight: boolean;
  buttonText: string;
  comingSoon?: boolean;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  type: 'service' | 'course' | 'consultancy';
}