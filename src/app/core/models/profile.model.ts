export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  availability: string;
  socials: SocialLink[];
}
