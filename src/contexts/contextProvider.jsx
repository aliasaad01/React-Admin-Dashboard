import { createContext, useContext, useState } from "react";

const StateContext = createContext();

// const initialState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activePopup, setActivePopup] = useState(null);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    const mode = e?.target?.value || e;
    setCurrentMode(mode);

    localStorage.setItem("themeMode", mode);

    setThemeSettings(false);
  };
  const setColor = (e) => {
    const color = e?.target?.value || e;
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  const handleClick = (name) => {
    setActivePopup((prev) => (prev === name ? null : name));
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        activePopup,
        setActivePopup,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);
