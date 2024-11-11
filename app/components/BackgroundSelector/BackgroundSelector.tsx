"use client";

import { backgrounds } from "@/app/utils/utilities";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface IBGSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

const BackgroundSelector = ({
  background,
  setBackground,
}: IBGSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleBGChange = (newBg: string) => {
    setBackground(newBg);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div onClick={toggleDropdown} className="bg-select relative">
        <p className="py-[5px] text-sm font-medium">Theme Selector</p>
        <div className="dropdown-title w-[62px]">
          <div
            className="w-[20px] h-[20px] rounded-full"
            style={{ background: background }}
          ></div>
          <ChevronDown />
        </div>

        {showDropdown && (
          <div className="dropdown-menu top-[74px] w-[62px] rounded-full flex flex-col gap-2">
            {backgrounds.map((bg, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleBGChange(bg)}
                  className="w-[20px] h-[20px] rounded-full"
                  style={{ background: bg }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};
export default BackgroundSelector;
