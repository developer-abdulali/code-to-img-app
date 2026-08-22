"use client";

import { backgrounds } from "@/app/utils/utilities";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface IBGSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

const BackgroundSelector = ({
  background,
  setBackground,
}: IBGSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleBGChange = (newBg: string) => {
    setBackground(newBg);
    setShowDropdown(false);
  };

  return (
    <div
      ref={dropdownRef}
      onClick={toggleDropdown}
      className="bg-select relative"
    >
      <p className="py-[5px] text-sm font-medium">Theme Selector</p>

      <div className="dropdown-title w-[62px]">
        <div
          className="h-[20px] w-[20px] rounded-full"
          style={{ background: background }}
        ></div>

        <ChevronDown />
      </div>

      {showDropdown && (
        <div className="dropdown-menu top-[74px] w-[62px] rounded-full flex flex-col gap-2">
          {backgrounds.map((bg, i) => (
            <div
              key={i}
              onClick={() => handleBGChange(bg)}
              className="h-[20px] w-[20px] rounded-full"
              style={{ background: bg }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundSelector;
