"use client";
import { languages } from "@/app/utils/utilities";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ILanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

const LanguageSelector = ({
  language,
  setLanguage,
  setActiveIcon,
}: ILanguageSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleChangeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon);
    }
  };

  return (
    <div onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium">{language}</p>
      <div className="dropdown-title capitalize w-[120px]">
        {language}
        <ChevronDown />
      </div>

      {/* languages dropdown */}
      {showDropdown && (
        <div className="dropdown-menu w-[120px] top-[94px]">
          {languages?.map((lang, i) => {
            return (
              <div key={i}>
                <button
                  onClick={() => handleChangeLanguage(lang.name)}
                  className="dropdown-items w-[120px] text-left"
                >
                  {lang.name}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default LanguageSelector;
