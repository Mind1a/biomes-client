"use client";
import Image from "next/image";
import { navLinks } from "../data/navLinksData";
import Link from "next/link";
import { useState } from "react";
import { useIsActive } from "../hooks/navLinksHooks";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isActive = useIsActive();

  return (
    <>
      <header
        aria-label="მთავარი ნავიგაცია"
        className="max-w-97.5 md:max-w-208.5 lg:max-w-348 h-13.75 md:h-17 lg:h-15.5 justify-between mx-auto mt-8 w-full items-center flex"
      >
        {/*//!Image Section */}
        <div className="shrink-0">
          <Link href="/" className="flex gap-[9.2px] items-center">
            <Image
              src="/assets/images/headerImages/svgs/GroupLogo.svg"
              alt="ბიომების ლოგო"
              width={220}
              height={48}
              className="h-auto w-35 md:w-41.25 lg:w-55"
            />
          </Link>
        </div>
        {/*//!Navigation Section */}
        <nav className="hidden h-15.5 w-full max-w-135.75 items-center rounded-[74px] bg-white pl-2 lg:flex">
          <ul className="w-full flex items-center max-w-127 h-11.5 justify-between">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.id}>
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={`flex h-11.5 items-center rounded-[74px] px-4 transition-colors ${
                      active
                        ? "bg-[#008645] font-bold text-white"
                        : "font-light text-[#666666]"
                    }`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* //!BurgerMenu Section */}
        <button
          className="flex lg:hidden flex-col gap-1 justify-center"
          aria-label="მენიუს გახსნა"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Image
            src="/assets/images/headerImages/svgs/Menu.svg"
            alt="მენიუს გახსნა"
            width={30}
            height={20}
            className="h-5 w-7.5"
          />
        </button>
      </header>

      {isMenuOpen && (
        <BurgerMenu setIsMenuOpen={setIsMenuOpen} isActive={isActive} />
      )}
    </>
  );
};

export default Header;
