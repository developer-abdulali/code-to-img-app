"use client";

import { themes } from "@/app/utils/utilities";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

interface IThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: IThemeSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div onClick={toggleDropdown} className="theme-selector">
        <p className="py-[5px] text-sm font-medium">Code Colors</p>
        <div className="dropdown-title capitalize w-[120px]">
          {theme}
          <ChevronDown />
        </div>

        {showDropdown && (
          <div className="dropdown-menu w-[120px] top-[94px]">
            {themes.map((theme, i) => {
              return (
                <button
                  onClick={() => toggleThemeChange(theme)}
                  key={i}
                  className="capitalize text-left"
                >
                  {theme}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};
export default ThemeSelector;
