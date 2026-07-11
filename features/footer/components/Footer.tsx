import Image from "next/image";
import Link from "next/link";
import { footerData } from "../data/data";

export default function Footer() {
  return (
    <footer className="firago w-full">
      <div className="w-full bg-[#008645]">
        <div
          className="
            mx-auto flex w-full max-w-[1440px] items-center justify-between
            h-[104px] px-[16px] py-[32px]
            md:h-[72px] md:px-[16px] md:py-[16px]
            lg:h-[136px] lg:px-[24px] lg:py-[27px]
          "
        >
          <Link href={footerData.mainLogo.href} aria-label={footerData.mainLogo.ariaLabel}>
            <Image
              src={footerData.mainLogo.src}
              alt={footerData.mainLogo.alt}
              width={footerData.mainLogo.width}
              height={footerData.mainLogo.height}
              priority
              className="
                object-contain
                w-[140px] h-[30px]
                md:w-[140px] md:h-[30px]
                lg:w-[220px] lg:h-[48px]
              "
            />
          </Link>

          <div
            className="
              flex items-center
              w-[79.93px] h-[40px] gap-[8px]
              md:w-[79.93px] md:h-[40px] md:gap-[8px]
              lg:w-[146px] lg:h-[68px] lg:gap-[24px]
            "
          >
            {footerData.partners.map((partner) => (
              <a
                key={partner.href}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.ariaLabel}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#007346]">
        <div
          className="
            mx-auto flex w-full max-w-[1440px] items-center justify-center
            h-[41px] px-[16px] py-[12px]
            md:h-[41px] md:px-[16px] md:py-[12px]
            lg:h-[43px] lg:justify-start lg:px-[24px] lg:py-[13px]
          "
        >
          <p className="text-white text-[14px] leading-[17px] font-normal tracking-[0]">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}