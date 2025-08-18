export interface SecuritySectionProps {
  // Future props can be added here
}

export interface SecurityFeature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export interface SecurityStat {
  label: string;
  value: string;
}