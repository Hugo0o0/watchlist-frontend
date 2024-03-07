export interface SidebarIconProps {
  size: number;
}

export interface CardProps {
  size?: "medium" | "large";
  type: "movie" | "series";
  src: string;
  name: string;
  year: string;
  status: string;
}
