"use client";

import React, { useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import BiomesMiniMap from "./BiomesMiniMap";
import BiomesNavBar from "./BiomesNavBar";


export default function BiomesSidebar() {
  const router = useRouter();
  const params = useParams();
  const activeId = (params?.id as string) || "";

  const handleBiomeSelect = useCallback((id: string) => {
    router.push(`/biomes/${id}`);
  }, [router]);

  return (
    <div className="flex flex-col xl:pr-6 gap-6  w-full">
      <div className="bg-white py-4  xl:rounded-3xl">
        <div className="flex items-start gap-2 px-4 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#024902]"></span>
          <span className="text-[#444444] text-[12px] leading-4.5 ">
            გავრცელება მსოფლიოში
          </span>
        </div>
        <BiomesMiniMap
          onBiomeSelect={handleBiomeSelect}
          selectedBiomes={activeId ? [activeId] : []}
        />
      </div>
      <BiomesNavBar />

    </div>
  );
}
