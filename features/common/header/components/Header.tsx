"use client";
import Image from "next/image";
import { navLinks } from "../data/navLinksData";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header
      aria-label="მთავარი ნავიგაცია"
      className="max-w-97.5 md:max-w-208.5 lg:max-w-348 max-h-13.75 md:max-h-17 lg:max-h-15.5 flex justify-between mx-auto mt-8 w-full"
    >
      {/*//!Image Section */}
      <div className=" max-w-35 md:max-w-41.25 lg:max-w-55 ">
        <Link href="/" className="flex gap-[9.2px] items-center">
          <Image
            src={"/images/svgs/GroupLogo.svg"}
            alt="ბიომების ლოგო"
            width={48}
            height={48}
            className="max-w-[30.7px] max-h-7.75 md:max-w-9 md:max-h-9 lg:max-w-[48.24px] lg:max-h-12 "
          />
          <p className="text-[#009F52] text-sm flex flex-col">
            დედამიწის ხმელეთის
            <span className="font-bold text-4xl tracking-[2px]">ბიომები</span>
          </p>
        </Link>
      </div>
      {/*//!Navigation Section */}
      <nav className="hidden lg:flex w-full max-w-135.75 max-h-15.5 bg-white rounded-full pr-[25.5px] pl-[9.5px]">
        <ul className="w-full flex justify-between items-center">
          {navLinks.map((link) => {
            return (
              <li key={link.id} className="text-[#000800] ">
                <Link
                  className={`p-4 text-lg font-semibold rounded-full transition-colors duration-300 ${
                    pathname.startsWith(link.href)
                      ? "bg-[#009F52] text-white"
                      : "hover:bg-green-600 hover:text-white text-[#000800]"
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
            className="w-15 h-15 rounded-full bg-[#009F52] flex items-center justify-center"
          >
            <Image
              src="/images/svgs/Search.svg"
              alt="ძებნა"
              width={24}
              height={24}
            />
          </button>
        ) : (
          <div className="relative max-w-82.5 w-full">
            <input
              type="text"
              placeholder="ძებნა..."
              className="w-full h-15 rounded-full bg-white text-black pl-6 pr-16 outline-none"
            />

            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#009F52] flex items-center justify-center"
            >
              <Image
                src="/images/svgs/Search.svg"
                alt="ძებნა"
                width={24}
                height={24}
              />
            </button>
          </div>
        )}
      </div>
      {/* //!BurgerMenu Section */}
      <button
        className="flex lg:hidden flex-col gap-1 justify-center"
        aria-label="მენიუს გახსნა"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="w-8 h-1 bg-gray-400 rounded-full" />
        <span className="w-8 h-1 bg-gray-400 rounded-full" />
        <span className="w-8 h-1 bg-gray-400 rounded-full" />
      </button>
    </header>
  );
};

export default Header;
