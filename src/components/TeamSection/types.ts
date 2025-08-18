export interface TeamSectionProps {
  // Future props can be added here
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  avatar: string;
  email: string;
  phone?: string;
  level: number; // 1 = CEO, 2 = Directors, 3 = Managers, 4 = Team members
  reportsTo?: number; // ID of the person they report to
}