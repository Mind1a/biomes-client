"use client";
import Image from "next/image";
import { navLinks } from "../data/navLinksData";
import Link from "next/link";
import { useState } from "react";
import { useIsActive } from "../hooks/navLinksHooks";
import BurgerMenu from "./BurgerMenu";
import SearchInput from "./SearchInput";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const isActive = useIsActive();

  return (
    <>
      <header
        aria-label="მთავარი ნავიგაცია"
        className="max-w-97.5 md:max-w-208.5 lg:max-w-348 h-13.75 md:h-17 lg:h-15.5 justify-between mx-auto mt-8 w-full items-center flex"
      >
        {/*//!Image Section */}
        <div className="max-w-35 md:max-w-41.25 lg:max-w-55 ">
          <Link href="/" className="flex gap-[9.2px] items-center">
            <Image
              src={"/images/svgs/GroupLogo.svg"}
              alt="ბიომების ლოგო"
              width={220}
              height={48}
              className="max-w-35 max-h-7.75 md:max-w-41.25 md:max-h-9 lg:max-w-55 lg:max-h-12"
            />
          </Link>
        </div>
        {/*//!Navigation Section */}
        <nav className="hidden lg:flex w-full max-w-135.75 h-15.5 bg-white rounded-[74px] items-center pl-2">
          <ul className="w-full flex items-center max-w-127 h-11.5 justify-between">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className={`p-4 ${
                      isActive(link.href)
                        ? "bg-[#008645] text-white font-bold leading-7.5 rounded-[74px] "
                        : "text-[#666666] font-light leading-7"
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
        {/* //!Search Section */}
        <div className="hidden lg:flex justify-end max-w-82.5 w-full">
          {!isSearchOpen ? (
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="w-15 h-15 rounded-full bg-[#008645] flex items-center justify-center"
            >
              <Image
                src="/images/svgs/Search.svg"
                alt="ძებნა"
                width={24}
                height={24}
              />
            </button>
          ) : (
            <SearchInput setIsSearchOpen={setIsSearchOpen} />
          )}
        </div>
        {/* //!BurgerMenu Section */}
        <button
          className="flex lg:hidden flex-col gap-1 justify-center"
          aria-label="მენიუს გახსნა"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Image
            src={"/images/svgs/Menu.svg"}
            alt="მენიუს გახსნა"
            width={30}
            height={20}
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
