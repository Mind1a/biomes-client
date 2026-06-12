"use client";

import Image from "next/image";
import { navLinks } from "../data/navLinksData";
import Link from "next/link";
import { BurgerMenuProps } from "../types/navLinksTypes";
import SearchInput from "./SearchInput";

const BurgerMenu = ({ setIsMenuOpen, isActive }: BurgerMenuProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#F0F0F0] flex flex-col p-6 lg:hidden">
      <div className="max-w-89.5 md:max-w-200.5 w-full mx-auto">
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="მენიუს დახურვა"
          >
            <Image
              src="/images/svgs/MenuClose.svg"
              alt="მენიუს დახურვის ხატი"
              width={32}
              height={32}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
        </div>

        <SearchInput />
        <ul className="flex flex-col gap-4 md:gap-3 mt-12 md:mt-30">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`flex gap-2.5 w-full max-w-89.5 md:max-w-200.5 pl-6 pt-3.5 pb-3.5 md:pt-6 md:pb-6 rounded-[48px] ${
                isActive(link.href) && "bg-[#008645]"
              }`}
            >
              <Image
                src={link.img}
                alt="ნავიგაციის ლოგოები"
                width={21}
                height={22}
                className={`filter brightness-0 ${
                  isActive(link.href) ? "invert" : "invert-40"
                }`}
              />
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`text-xl md:text-[28px] ${
                  isActive(link.href)
                    ? "text-white font-bold"
                    : "text-[#666666] font-regular"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
