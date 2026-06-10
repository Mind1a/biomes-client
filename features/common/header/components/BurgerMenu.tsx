"use client";

import Image from "next/image";
import { navLinks } from "../data/navLinksData";
import Link from "next/link";
import { BurgerMenuProps } from "../types/navLinksTypes";

const BurgerMenu = ({ setIsMenuOpen, isActive }: BurgerMenuProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#F0F0F0] flex flex-col p-6 lg:hidden">
      <div className="max-w-89.5 mx-auto">
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
            />
          </button>
        </div>

        <div className="relative max-w-89.5 w-full mt-16">
          <input
            type="text"
            placeholder="ძებნა..."
            className="w-full h-15 rounded-full bg-white text-[#666666] pl-6 pr-16 outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#008645] flex items-center justify-center">
            <Image
              src="/images/svgs/Search.svg"
              alt="ძებნა"
              width={24}
              height={24}
            />
          </button>
        </div>

        <ul className="flex flex-col gap-4 mt-12">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`flex gap-2.5 w-full max-w-89.5 pl-6 pt-3.5 pb-3.5 rounded-[48px] ${
                isActive(link.href) && "bg-[#008645]"
              }`}
            >
              <Image
                src={link.img}
                alt="ნავიგაციის ლოგოები"
                width={21}
                height={22}
              />
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`text-xl ${
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
