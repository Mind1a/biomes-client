"use client";

import Image from "next/image";
import { navLinks } from "../data/navLinksData";
import Link from "next/link";
import { BurgerMenuProps } from "../types/navLinksTypes";

const BurgerMenu = ({ setIsMenuOpen, isActive }: BurgerMenuProps) => {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-[#F0F0F0] p-6 lg:hidden"
    >
      <div className="max-w-89.5 md:max-w-200.5 w-full mx-auto">
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="მენიუს დახურვა"
          >
            <Image
              src="/assets/images/headerImages/svgs/MenuClose.svg"
              alt="მენიუს დახურვის ხატი"
              width={32}
              height={32}
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </button>
        </div>

        <ul className="flex flex-col gap-4 md:gap-3 mt-12 md:mt-30">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.id} className="w-full max-w-89.5 md:max-w-200.5">
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className={`flex w-full items-center gap-2.5 rounded-[48px] py-3.5 pl-6 pr-5 transition-colors md:py-6 ${
                    active ? "bg-[#008645]" : ""
                  }`}
                >
                  <Image
                    src={link.img}
                    alt=""
                    width={21}
                    height={22}
                    className={`h-[22px] w-[21px] shrink-0 brightness-0 ${
                      active ? "invert" : "opacity-60"
                    }`}
                  />
                  <span
                    className={`text-xl leading-none md:text-[28px] ${
                      active
                        ? "font-bold text-white"
                        : "font-normal text-[#666666]"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
