"use client";

interface IPaddingSelector {
  paddings: string[];
  currentPadding: string;
  setCurrentPadding: (padding: string) => void;
}

const PaddingSelector = ({
  paddings,
  currentPadding,
  setCurrentPadding,
}: IPaddingSelector) => {
  const changePaddingHandler = (newPadding: string) => {
    setCurrentPadding(newPadding);
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Padding Selector</p>
      <div className="flex gap-4">
        {paddings.map((padding, i) => {
          return (
            <button
              onClick={() => changePaddingHandler(padding)}
              key={i}
              className={`h-[37px] flex items-center justify-center text-sm px-2 cursor-pointer ${
                currentPadding === padding &&
                "bg-white/10 text-white rounded-md"
              } hover:text-white ease-linear transition-all duration-300`}
            >
              {padding}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default PaddingSelector;
