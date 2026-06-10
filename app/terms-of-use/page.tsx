import { termsList } from "@/features/terms-of-use/data/termsList";
import React from "react";

const TermsOfUse = () => {
  return (
    <div className="px-4 max-w-289 mx-auto w-full">
      <div className="bg-gray-300 w-full aspect-2/1 lg:mt-20" />
      <div className="flex flex-col gap-10 lg:gap-16 max-w-230 mx-auto pt-8 pb-6 lg:py-14">
        {Object.values(termsList).map((section) => (
          <article className="" key={section.title}>
            <h2 className="font-bold text-[14px] lg:text-[18px] mb-4 lg:mb-5">
              {section.title}
            </h2>
            {section.subtitle && (
              <ul className="list-disc list-inside mb-2 text-[12px] lg:text-[16px]">
                <li>{section.subtitle}</li>
              </ul>
            )}
            {section.orderedItems && (
              <ol className="list-decimal list-inside mb-3 lg:mb-4 text-[12px] lg:text-[16px]">
                {section.orderedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            )}
            {section.items && (
              <ul className="list-disc list-inside text-[12px] lg:text-[16px]">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default TermsOfUse;
