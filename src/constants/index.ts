export const SITE_NAME = "Kesari Restaurant";
export const SITE_DESCRIPTION = "Authentic Indian Cuisine";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

// Color palette
export const COLORS = {
  background: {
    light: "#FFEBCE",
    dark: "#FFA115",
  },
  black: "#000000",
  title: "#FF9900",
  primary: "#FF9900",
} as const;
