import BiomeMap from "@/features/common/biomeMap/BiomeMap";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F0F0F0]">
      <main className="flex-1">
        <BiomeMap />
      </main>
    </div>
  );
}
