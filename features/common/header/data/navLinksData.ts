import { NavLink } from "../types/navLinksTypes";

const HEADER_ICON_PATH = "/assets/images/headerImages/svgs";

export const navLinks: NavLink[] = [
  {
    id: 1,
    label: "ბიომები",
    href: "/",
    img: `${HEADER_ICON_PATH}/TreeLogo.svg`,
  },
  {
    id: 2,
    label: "გამოყენების წესები",
    href: "/terms",
    img: `${HEADER_ICON_PATH}/File.svg`,
  },
  {
    id: 3,
    label: "პროექტის შესახებ",
    href: "/about",
    img: `${HEADER_ICON_PATH}/InfoLogo.svg`,
  },
];
