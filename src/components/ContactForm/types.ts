export interface ContactFormProps {
  // Future props can be added here
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactInfo {
  icon: string;
  text: string;
}

export interface DirectContact {
  icon: React.ComponentType<any>;
  text: string;
}