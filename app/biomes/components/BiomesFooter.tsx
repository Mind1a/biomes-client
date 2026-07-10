"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useSidebarStore } from "@/app/store/SideBarStore";

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

export default function BiomesFooter() {
  const { openSidebar } = useSidebarStore()
  const params = useParams();
  const activeId = (params?.id as string) || "";

  const currentIndex = biomesData.findIndex((b) => b.id === activeId);

  if (currentIndex === -1) return null;

  // Circular loop indexes
  const prevIndex = (currentIndex - 1 + biomesData.length) % biomesData.length;
  const nextIndex = (currentIndex + 1) % biomesData.length;

  const prevBiome = biomesData[prevIndex];
  const nextBiome = biomesData[nextIndex];

  const currentNum = (currentIndex + 1).toString().padStart(2, "0");
  const totalNum = biomesData.length.toString().padStart(2, "0");

  return (
    <footer className="w-full   py-6 px-6  mt-12 ">
      <div className="max-w-348 hidden xl:flex px-6 w-full mx-auto  items-center justify-between">
        {/* Previous Biome Button */}
        <Link
          href={`/biomes/${prevBiome.id}`}
          className=" font-medium flex items-center gap-2 px-4 py-3 border border-[#E0E0E0] bg-white rounded-xl group"
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/5 transition-transform group-hover:scale-105"
            style={{ backgroundColor: prevBiome.color }}
          />
          <span className="text-[12px] leading-4.5 font-medium group-hover:text-black transition-colors">
            &larr; {prevBiome.name}
          </span>
        </Link>

        {/* Center Numbering */}
        <div className="text-[12px] leading-4.5  font-medium  select-none">
          <span className="text-[#008645] font-semibold">{currentNum}</span>
          <span className="text-[#3D3D3D] mx-1.5">/</span>
          <span className="text-[#3D3D3D]">{totalNum}</span>
        </div>

        {/* Next Biome Button */}
        <Link
          href={`/biomes/${nextBiome.id}`}
          className=" flex items-center gap-2 px-4 py-3 border border-[#E0E0E0] bg-white rounded-xl group group"
        >
          <span className="text-[12px] leading-4.5   font-medium  group-hover:text-black transition-colors">
            {nextBiome.name} &rarr;
          </span>
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/5 transition-transform group-hover:scale-105"
            style={{ backgroundColor: nextBiome.color }}
          />
        </Link>
      </div>

      <div className="max-w-348 xl:hidden p-4 z-50 mx-auto flex items-center justify-between fixed bottom-0 w-full left-0">
        <Link href={`/biomes/${prevBiome.id}`} className="md:py-4.25 py-2  w-29.25 gap-1.5 flex cursor-pointer items-center rounded-full px-6 bg-white border border-[#008645] text-[#008645]">
          <Image width={14} height={11} src={'/assets/icons/arrow.svg'} alt="" />
          <span className="mt-1">
            უკან
          </span>
        </Link>

        <button onClick={openSidebar} className="p-3 bg-[#008645] rounded-full cursor-pointer">
          <Image width={32} height={32} src={'/assets/icons/mage_filter-fill.svg'} alt={""} />
        </button>
      </div>
    </footer>
  );
}
