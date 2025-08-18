
export interface ServiceDetails {
  fullDescription: string;
  features: string[];
  benefits: string[];
  image: string;
}

export interface ServiceModalService {
  name: string;
  description: string;
  icon: string;
  color: string;
  details: ServiceDetails;
}

export interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceModalService | null;
}