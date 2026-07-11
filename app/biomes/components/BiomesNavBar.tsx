"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSidebarStore } from "@/app/store/SideBarStore";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BiomeItem {
  id: string;
  name: string;
  color: string;
}

const biomesData: BiomeItem[] = [
  { id: "polar-desert", name: "პოლარული უდაბნო", color: "#A1B4B3" },
  { id: "tundra", name: "ტუნდრა", color: "#7FE2C9" },
  { id: "taiga", name: "ტაიგა (ბორეალური)", color: "#005048" },
  { id: "nemoral-biome", name: "ნემორალური ტყეები", color: "#9BDE47" },
  { id: "temperate-grasslands-savannas-shrublands", name: "სტეპები და პრერიები", color: "#F9E854" },
  { id: "subtropical-hemihylea", name: "ჰემიჰილეა (სუბტრ.)", color: "#076809" },
  { id: "mediterranean-forests", name: "ხმელთაშუაზღვის ბიომი", color: "#785784" },
  { id: "tropical-seasonal-forest", name: "მუსონური ტყეები", color: "#5D825A" },
  { id: "deserts-xeric-shrublands", name: "უდაბნოები", color: "#8B3C26" },
  { id: "tropical-savannas", name: "ტროპიკული სავანები", color: "#CEB73E" },
  { id: "hylea", name: "ჰილეა (ეკვ. ტყეები)", color: "#024902" },
  { id: "orobiome", name: "ორობიომი", color: "#247A7C" },
  { id: "hemi-hylea", name: "სუბანტარქტ. ჰემიჰილეა", color: "#07E301" }
];

export default function BiomesNavBar() {
  const { isOpen, closeSidebar } = useSidebarStore();
  const pathname = usePathname();
  const activeId = pathname ? pathname.split("/").pop() : "";

  const overlayRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const filteredBiomes = biomesData.filter((biome) => biome.id !== activeId);

  useGSAP(() => {
    if (!isOpen) {
      gsap.set(overlayRef.current, { opacity: 0, visibility: "hidden" });
      gsap.set(sidebarRef.current, { y: 100, opacity: 0 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(overlayRef.current, {
      duration: 0.4,
      opacity: 1,
      visibility: "visible",
    })
      .to(sidebarRef.current, {
        duration: 0.5,
        y: 0,
        opacity: 1,
      }, "-=0.2");

  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div>
      {/* Desktop side */}
      <div className="bg-white hidden py-6 z-50 xl:block px-8 rounded-3xl  border border-gray-100/50">
        <h2 className="text-[11px]  text-[#3D3D3D] leading-4 mb-3">
          სხვა ბიომები
        </h2>
        <div className="flex flex-col gap-1.5">
          {filteredBiomes.map((biome) => {
            const isActive = activeId === biome.id;
            return (
              <Link
                key={biome.id}
                href={`/biomes/${biome.id}`}
                className={`flex items-center justify-between py-3 px-4 rounded-2xl transition-all duration-200 group ${isActive
                  ? "bg-gray-50 text-[#024902] font-semibold shadow-xs"
                  : "text-[#444444] hover:bg-gray-50/70 hover:text-black"
                  }`}
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className="w-3 h-3 rounded-full shrink-0 border border-black/5"
                    style={{ backgroundColor: biome.color }}
                  />
                  <span className="text-[12px] leading-4.5 font-medium">
                    {biome.name}
                  </span>
                </div>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive
                    ? "text-[#024902] translate-x-0.5"
                    : "text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>



      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="xl:hidden fixed flex items-start py-10 overflow-y-auto top-0 w-full bg-[#D9D9D9]/50 backdrop-blur-xl h-full z-100"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <div
          ref={sidebarRef}
          className="bg-white max-w-120 mx-auto py-6 px-8 rounded-3xl border border-gray-100/50"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-[16px]  text-[#888888] leading-4 mb-3">
              სხვა ბიომები
            </h2>

            <button className="cursor-pointer" onClick={closeSidebar}>
              <Image src={'/assets/icons/close.svg'} width={14} height={24} alt="" />
            </button>
          </div>
          <div className="flex flex-col gap-1.5">
            {filteredBiomes.map((biome) => {
              const isActive = activeId === biome.id;
              return (
                <Link
                  key={biome.id}
                  onClick={closeSidebar}
                  href={`/biomes/${biome.id}`}
                  className={`flex items-start justify-between gap-2 py-3 px-4 rounded-2xl transition-all duration-200 group ${isActive
                    ? "bg-gray-50 text-[#024902] font-semibold shadow-xs"
                    : "text-[#444444] hover:bg-gray-50/70 hover:text-black"
                    }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 border border-black/5"
                      style={{ backgroundColor: biome.color }}
                    />
                    <span className="text-[14px] leading-4.5 font-medium">
                      {biome.name}
                    </span>
                  </div>
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive
                      ? "text-[#024902] translate-x-0.5"
                      : "text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5"
                      }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
