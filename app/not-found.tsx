import Image from "next/image";
import Link from "next/link";
import { tbcContracticaCaps } from "@/public/assets/fonts/fonts";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F3F3F3] ">
      <Image
        src="/Frame.svg"
        alt="404 Illustration"
        width={682}
        height={498}
        priority
      />

      <h1
        className={`${tbcContracticaCaps.className} mt-10 text-center text-[32px] font-bold text-[#666666]`}
      >
        შედეგები ვერ მოიძებნა
      </h1>

      <Link href="/" className="mt-4 flex items-center gap-2">
        <Image src="/arrow.svg" alt="Back Arrow" width={22} height={22} />

        <span
          className={`${tbcContracticaCaps.className} text-[22px] font-medium text-black`}
        >
          მთავარი გვერდი
        </span>
      </Link>
    </main>
  );
}
