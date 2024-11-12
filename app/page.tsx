"use client";
import { useRef, useState, useEffect } from "react";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import { backgrounds, languages, themes } from "./utils/utilities";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import BackgroundSelector from "./components/BackgroundSelector/BackgroundSelector";
import PaddingSelector from "./components/PaddingSelector/PaddingSelector";
import { Menu, X, Code2 } from "lucide-react";
import Footer from "./components/Footer/Footer";
import html2canvas from "html2canvas";

const Home = () => {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[1]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownloadImage = async () => {
    const editorElement = editorRef.current;

    if (editorElement) {
      const handleElements = document.querySelectorAll(".handle") as any;
      const cursorElement = document.querySelector(".ace_cursor") as any;
      const codeTitle = document.querySelector(".code-title") as any;

      handleElements.forEach(
        (element: any) => (element.style.display = "none")
      );
      cursorElement.style.display = "none";
      codeTitle.style.boxShadow = "none";

      const canvas = await html2canvas(editorElement);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      const link = document.createElement("a");
      link.download = "code-to-image.png";
      link.href = image;
      link.click();

      handleElements.forEach(
        (element: any) => (element.style.display = "block")
      );
      cursorElement.style.display = "block";
      codeTitle.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2) !important";
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      {/* Mobile Header Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#191919] flex items-center justify-between px-4 z-40 border-b border-[#3C3C3C]">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-blue-400" />
          <span className="text-lg font-semibold text-slate-200">CodeSnap</span>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 hover:bg-white/10 rounded-md transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Header */}
      <header
        className={`
        mt-16 lg:mt-6 flex flex-col lg:flex-row gap-4 lg:gap-6 
        w-full lg:w-[1000px] p-4 lg:p-5 
        fixed top-0 left-1/2 transform -translate-x-1/2 z-30 
        bg-[#191919] rounded border-[#3C3C3C] shadow-md
        transition-all duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full lg:translate-y-0 opacity-0 lg:opacity-100"
        }
      `}
      >
        {/* Desktop Logo - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-2 pr-4 border-r border-[#3C3C3C]">
          <Code2 className="w-6 h-6 text-blue-400" />
          <span className="text-base font-semibold text-slate-200">
            CodeSnap
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
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

          <PaddingSelector
            paddings={paddings}
            currentPadding={currentPadding}
            setCurrentPadding={setCurrentPadding}
          />
        </div>

        <div className="export-btn self-center lg:ml-auto mt-4 lg:mt-0">
          <button
            onClick={handleDownloadImage}
            className="w-full lg:w-auto flex items-center justify-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300"
          >
            Export PNG
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={toggleMobileMenu}
        />
      )}

      <div
        ref={editorRef}
        className="code-editor-ref mt-[8rem] lg:mt-[10rem] w-[95%] lg:w-auto"
      >
        <CodeEditor
          language={language}
          icon={activeIcon}
          theme={theme}
          background={background}
          currentPadding={currentPadding}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
