"use client";
import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

//themes
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import { useEffect, useState } from "react";
import { initailCode } from "@/app/utils/utilities";

interface ICodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

// CodeEditor.tsx modifications
const CodeEditor = ({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: ICodeEditorProps) => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 500 });
  const [title, setTitle] = useState("Untitled-1");
  const [code, setCode] = useState(initailCode);

  useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth * 0.95, 1000);
      setDimensions({ width, height: dimensions.height });
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleResize = (e: any, direction: any, ref: any, pos: any) => {
    const newHeight = ref.style.height;
    setDimensions((prev) => ({ ...prev, height: parseInt(newHeight, 10) }));
  };

  return (
    <Resizable
      minHeight={466}
      minWidth={320}
      maxWidth={1000}
      size={dimensions}
      onResize={handleResize}
      className="resize-container relative"
      style={{ background }}
    >
      <div className="code-block" style={{ padding: currentPadding }}>
        {/* Resize handles */}
        <div className="hidden lg:block">
          <div className="handle handle-top absolute left-1/2 -translate-x-1/2 top-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
          <div className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
          <div className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
          <div className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
        </div>

        {/* Title bar */}
        <div className="code-title h-[57px] px-4 flex items-center justify-between bg-black border-opacity-80">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
          </div>

          <div className="input-control w-full">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full py-2 text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent"
            />
          </div>

          <div className="icon flex items-center justify-center p-1 bg-black bg-opacity-30 rounded-md">
            <img src={icon} alt="icon" className="w-8 object-cover" />
          </div>
        </div>

        <AceEditor
          value={code}
          name="UNIQUE_ID_OF_DIV"
          fontSize={16}
          theme={theme}
          mode={language.toLowerCase()}
          showGutter={false}
          height={`calc(${dimensions.height}px - ${currentPadding} - ${currentPadding} - 52px)`}
          width="100%"
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          onChange={handleCodeChange}
          className="ace-editor-container"
        />
      </div>
    </Resizable>
  );
};
// const CodeEditor = ({
//   language,
//   theme,
//   icon,
//   background,
//   currentPadding,
// }: ICodeEditorProps) => {
//   const [width, setWidth] = useState(1000);
//   const [height, setHeight] = useState(500);
//   const [title, setTitle] = useState("Untitled-1");
//   const [code, setCode] = useState(initailCode);

//   const handleCodeChange = (newCode: string) => {
//     setCode(newCode);
//   };

//   // @ts-ignore
//   const handleResize = (e, direction, ref, pos) => {
//     const newHeight = ref.style.height;
//     setHeight(parseInt(newHeight, 10));
//   };

//   const updateSize = () => {
//     setWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => {
//       window.removeEventListener("resize", updateSize);
//     };
//   }, []);

//   return (
//     <Resizable
//       minHeight={466}
//       minWidth={510}
//       maxWidth={1000}
//       defaultSize={{
//         width: width,
//         height: height || 500,
//       }}
//       onResize={handleResize}
//       className="resize-container relative"
//       style={{ background: background }}
//     >
//       <div className="code-block" style={{ padding: currentPadding }}>
//         <div className="handle handle-top absolute left-1/2 translate-x-[-50%] top-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
//         <div className="handle handle-bottom absolute left-1/2 bottom-[-4px] w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
//         <div className="handle handle-left absolute left-[-4px] top-1/2 w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>
//         <div className="handle handle-right absolute right-[-4px] top-1/2 w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-50"></div>

//         <div className="code-title h-[57px] px-4 flex items-center justify-between bg-black border-opacity-80">
//           <div className="dots flex items-center gap-1">
//             <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
//             <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
//             <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
//           </div>

//           {/* inputs */}
//           <div className="input-control w-full">
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full py-2 text-[hsla(0,0%,100%,.6)] outline-none font-medium text-center bg-transparent"
//             />
//           </div>

//           <div className="icon flex items-center justify-center p-1 bg-black bg-opacity-30 rounded-md">
//             <img src={icon} alt="icon" className="w-8 object-cover" />
//           </div>
//         </div>
//         <AceEditor
//           value={code}
//           name="UNIQUE_ID_OF_DIV"
//           fontSize={16}
//           theme={theme}
//           mode={language.toLocaleLowerCase()}
//           showGutter={false}
//           height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
//           wrapEnabled={true}
//           showPrintMargin={false}
//           highlightActiveLine={false}
//           editorProps={{ $blockScrolling: true }}
//           onChange={handleCodeChange}
//           className="ace-editor-container"
//         />
//       </div>
//     </Resizable>
//   );
// };
export default CodeEditor;
