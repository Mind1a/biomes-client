import { Dispatch, SetStateAction } from "react";
export type NavLink = {
  id: number;
  label: string;
  href: string;
  img: string;
};

export type BurgerMenuProps = {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isActive: (href: string) => boolean;
};

export type SearchInputProps = {
  setIsSearchOpen?: Dispatch<SetStateAction<boolean>>;
};
