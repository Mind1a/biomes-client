import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="firago w-full bg-[#3F3F3F]">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Top green area */}
        <div
          className="
            flex items-center justify-between bg-[#008645]

            h-[104px] px-[16px] py-[32px]

            md:h-[72px] md:px-[16px] md:py-[16px]

            lg:h-[136px] lg:px-[24px] lg:py-[27px]
          "
        >
          {/* Biomes logo */}
<Link href="/">
  <Image
    src="/footer/biomes-logo.png"
    alt="ბიომები"
    width={220}
    height={48}
    priority
    className="
      object-contain

      w-[140px] h-[30px]

      md:w-[140px] md:h-[30px]

      lg:w-[220px] lg:h-[48px]
    "
  />
</Link>
          {/* Right logos */}
          <div
            className="
              flex items-center

              w-[79.93px] h-[40px] gap-[8px]

              md:w-[79.93px] md:h-[40px] md:gap-[8px]

              lg:w-[146px] lg:h-[68px] lg:gap-[24px]
            "
          >
            <a
  href="https://iliauni.edu.ge"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    src="/footer/ilia-logo.png"
    alt="Ilia State University"
    width={71}
    height={68}
    className="
      object-contain

      w-[41.96px] h-[40px]

      md:w-[41.96px] md:h-[40px]

      lg:w-[71px] lg:h-[68px]
    "
  />
</a>

            <a
  href="https://unilab.iliauni.edu.ge"
  target="_blank"
  rel="noopener noreferrer"
>
  <Image
    src="/footer/unilab-logo.png"
    alt="Unilab"
    width={51}
    height={69}
    className="
      object-contain

      w-[29.97px] h-[40px]

      md:w-[29.97px] md:h-[40px]

      lg:w-[51.25px] lg:h-[69.49px]
    "
  />
</a>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div
          className="
            flex items-center justify-center bg-[#007346]

            h-[41px] px-[16px] py-[12px]

            md:h-[41px] md:px-[16px] md:py-[12px]

            lg:h-[43px] lg:justify-start lg:px-[24px] lg:py-[13px]
          "
        >
          <p className="text-white text-[14px] leading-[17px] font-normal tracking-[0]">
            © ყველა უფლება დაცულია
          </p>
        </div>
      </div>
    </footer>
  );
}