/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Dock({
  icon1,
  icon2,
  icon3,
  DockOption,
  DockItems,
  colorIcon = {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null);

  const toggleDock = (option) => {
    if (activeOption === option) {
      setIsOpen(false);
      setActiveOption(null);
    } else {
      setIsOpen(true);
      setActiveOption(option);
    }
  };

  const getIcon = (option) => {
    switch (option) {
      case "Apps":
        return icon1;
      case "Components":
        return icon2;
      case "Notes":
        return icon3;
    }
  };

  return (
    <>
      <div className="min-h-screen  p-4 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-2xl">
          <div
            className={`absolute bottom-full left-0 right-0 mb-2 bg-white/10 opacity-5 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-black ">
                  {activeOption}
                </h3>
              </div>

              <div className="space-y-2">
                {activeOption &&
                  DockOption[activeOption].map((item, index) => (
                    <button
                      key={index}
                      className="w-full p-2 hover:bg-gray-300/30 rounded-lg flex items-center gap-3"
                    >
                      <span
                        className={`${colorIcon.text} || text-black
                        `}
                      >
                        {item.icon}
                      </span>
                      <span className=" text-slate-700">{item.label}</span>
                      {item.shortcut && (
                        <span className="ml-auto text-sm text-gray-600">
                          {item.shortcut}
                        </span>
                      )}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          <div className="bg-white/20 rounded-2xl ring-1 ring-black/5">
            <div className="flex justify-around p-2">
              {DockItems.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleDock(option)}
                  className={`flex items-center justify-center w-1/3 p-2 rounded-xl transition-colors ${
                    activeOption === option
                      ? "bg-gray-500/10"
                      : "hover:bg-gray-200/50"
                  }`}
                >
                  {getIcon(option)}
                  <span className="ml-2 font-medium text-white dark:text-black">
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
