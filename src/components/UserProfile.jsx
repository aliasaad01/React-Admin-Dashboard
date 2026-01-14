import { useEffect, useRef } from "react";
import {
  MdClose,
  MdOutlineEmail,
  MdOutlineTaskAlt,
  MdLogout,
} from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useStateContext } from "../contexts/contextProvider";
import avatar from "../data/avatar.jpg";

const ProfileItem = ({ icon, text }) => (
  <button
    className="flex items-center gap-3 w-full p-4
              hover:bg-gray-100 dark:hover:bg-main-dark-bg
              transition"
  >
    <span className="text-xl">{icon}</span>
    <span>{text}</span>
  </button>
);

const UserProfile = () => {
  const { handleClick } = useStateContext();
  const userProfileRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        userProfileRef.current &&
        !userProfileRef.current.contains(e.target)
      ) {
        handleClick("userProfile");
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <div
      ref={userProfileRef}
      className="absolute right-4 top-16 z-50
                w-72 bg-white dark:bg-secondary-dark-bg
                rounded-2xl shadow-xl dark:text-gray-200"
    >
      {/* Header + Close */}
      <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <p className="font-semibold text-lg">User Profile</p>
        <button
          onClick={() => handleClick("userProfile")}
          className="p-1 hover:bg-light-gray dark:hover:bg-main-dark-bg rounded-full transition-all"
        >
          <MdClose className="text-xl text-gray-500 dark:text-gray-200" />
        </button>
      </div>

      {/* User Info */}
      <div className="flex gap-4 items-center p-4">
        <img src={avatar} alt="user" className="w-14 h-14 rounded-full" />
        <div>
          <p className="font-semibold text-lg">Michael Roberts</p>
          <p className="text-sm text-gray-500">Frontend Developer</p>
          <p className="text-sm text-gray-400">michael@gmail.com</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="border-t dark:border-gray-700">
        <ProfileItem icon={<FaUserCircle />} text="My Profile" />
        <ProfileItem icon={<MdOutlineEmail />} text="My Inbox" />
        <ProfileItem icon={<MdOutlineTaskAlt />} text="My Tasks" />
      </div>

      {/* Logout */}
      <div className="border-t dark:border-gray-700">
        <button
          className="flex items-center gap-3 w-full p-5
                    text-red-500 hover:bg-gray-100
                    dark:hover:bg-main-dark-bg transition rounded-b-2xl"
        >
          <MdLogout className="text-xl hover:text-red-500" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
