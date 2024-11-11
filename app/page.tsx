"use client";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import { backgrounds, languages, themes } from "./utils/utilities";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import BackgroundSelector from "./components/BackgroundSelector/BackgroundSelector";

const Home = () => {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  return (
    <main className="h-[100vh] flex flex-col items-center justify-between">
      <header className="mt-6 flex gap-6 w-[940px] p-5 fixed top-0 left-1/2 translate-x-[-50%] z-10 bg-[#191919] rounded border-[#3C3C3C] shadow-md">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />
      </header>
      <div className="code-editor-ref mt-[14rem]">
        <CodeEditor language={language} icon={activeIcon} theme={theme} />
      </div>
    </main>
  );
};
export default Home;
