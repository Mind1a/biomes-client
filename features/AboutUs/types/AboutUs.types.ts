import { socialIcons } from "../data/AboutUs";

export interface AboutUsSection {
  title: string;
  paragraphs: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  socialLinks: SocialLink[];
}

// export interface SocialLink {
//   type: "linkedin" | "behance" | "dribbble" | "github";
//   href: string;
// }

export type SocialType = keyof typeof socialIcons;

export interface SocialLink {
  type: SocialType;
  href: string;
}

export interface ProjectAuthor {
  name: string;
  role: string;
  bio: string;
  description: string[];
}

export type AboutUsData = AboutUsSection[];
