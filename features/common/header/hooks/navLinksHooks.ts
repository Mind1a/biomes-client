"use client";

import { usePathname } from "next/navigation";

export const useIsActive = () => {
  const pathname = usePathname();

  return (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
};
