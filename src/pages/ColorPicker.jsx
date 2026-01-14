import { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Header } from "../components";
import { FiCopy, FiCheck } from "react-icons/fi";

const ColorPicker = () => {
  const [color, setColor] = useState("#03C9D7");
  const [copied, setCopied] = useState(false);

  const copyColor = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App" title="Color Picker" />

      <div>
        <div className="flex justify-center items-center gap-4 mb-10">
          <div
            className="w-32 h-10 rounded-lg border"
            style={{ backgroundColor: color }}
          />

          <button
            onClick={copyColor}
            className="px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:text-gray-200"
          >
            {copied ? (
              <FiCheck className="text-green-600" size={18} />
            ) : (
              <FiCopy size={18} />
            )}
          </button>
        </div>

        <div className="flex gap-20 justify-center items-center flex-wrap">
          {/* Inline Palette */}
          <div>
            <HexColorPicker color={color} onChange={setColor} />{" "}
          </div>

          {/* Inline Picker */}
          <div>
            <HexColorInput
              color={color}
              onChange={setColor}
              prefixed
              className="border rounded-lg px-3 py-2 w-40 font-mono dark:bg-secondary-dark-bg dark:text-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
