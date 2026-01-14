import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/contextProvider";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-secondary-dark-bg"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    activePopup,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<AiOutlineMenu />}
        color={currentColor}
      />

      <div className="flex">
        <NavButton
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
          dotColor={"#03c9d7"}
        />
        <NavButton
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
          dotColor={"#03c9d7"}
        />

        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-secondary-dark-bg rounded-lg"
          onClick={() => {
            handleClick("userProfile");
          }}
        >
          <img src={avatar} className="rounded-full w-8 h-8" />
          <p>
            <span className="text-gray-400 text-14">Hi, </span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              Michael
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

        {activePopup === "cart" && <Cart />}
        {activePopup === "chat" && <Chat />}
        {activePopup === "notification" && <Notification />}
        {activePopup === "userProfile" && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
