import Image from "next/image";
import { SearchInputProps } from "../types/navLinksTypes";

const SearchInput = ({ setIsSearchOpen }: SearchInputProps) => {
  return (
    <div className="relative max-w-89.5 md:max-w-200.5 lg:max-w-82.5 w-full mt-16 lg:mt-0">
      <input
        type="search"
        placeholder="ძებნა..."
        className="w-full h-15 md:h-18 lg:h-15 rounded-full bg-white text-[#666666] pl-6 pr-16 outline-none"
      />
      <button
        onClick={() => setIsSearchOpen?.((prev) => !prev)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 lg:w-11 lg:h-11 rounded-full bg-[#008645] flex items-center justify-center"
      >
        <Image
          src="/assets/images/headerImages/svgs/Search.svg"
          alt="ძებნა"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default SearchInput;
