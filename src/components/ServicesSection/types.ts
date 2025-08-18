
export interface ServiceDetails {
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
}

export interface Service {
  icon: string;
  name: string;
  description: string;
  color: string;
  details: ServiceDetails;
}

export interface ServicesSectionProps {
  // Future props can be added here
}