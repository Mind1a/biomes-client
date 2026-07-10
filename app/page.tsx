import Header from "@/features/common/header/components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <Header />
      
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
