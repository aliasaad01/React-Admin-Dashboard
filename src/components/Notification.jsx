import { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { useStateContext } from "../contexts/contextProvider";
import { Button } from ".";

const notificationsData = [
  {
    title: "New order received",
    desc: "You have received a new order",
    time: "2 min ago",
  },
  {
    title: "New user registered",
    desc: "A new user has joined",
    time: "10 min ago",
  },
  {
    title: "Server restarted",
    desc: "System maintenance completed",
    time: "1 hour ago",
  },
  {
    title: "Payment success",
    desc: "Payment processed successfully",
    time: "2 hours ago",
  },
  {
    title: "New message",
    desc: "You received a new message",
    time: "Yesterday",
  },
];

const Notification = () => {
  const { currentColor, handleClick } = useStateContext();
  const notificationRef = useRef(null);

  /* click outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        handleClick("notification");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClick]);

  return (
    <div
      ref={notificationRef}
      className="absolute right-5 top-16 w-80
                bg-white dark:bg-secondary-dark-bg
                rounded-2xl shadow-xl p-4 z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold dark:text-gray-200">
          Notifications
        </p>
        {/* X button */}
        <button
          type="button"
          onClick={() => handleClick("notification")}
          className="p-1 hover:bg-light-gray dark:hover:bg-main-dark-bg rounded-full transition-all"
        >
          <MdClose className="text-xl text-gray-500 dark:text-gray-200" />
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 max-h-[260px] overflow-y-auto pr-1">
        {notificationsData.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-xl cursor-pointer
                      hover:bg-light-gray dark:hover:bg-main-dark-bg
                      transition-all"
          >
            <p className="font-medium text-sm dark:text-gray-200">
              {item.title}
            </p>
            <p className="text-xs text-gray-500">{item.desc}</p>
            <p className="text-xs text-gray-400">{item.time}</p>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="mt-4">
        <Button
          color="white"
          bgColor={currentColor}
          text="See all notifications"
          borderRadius="10px"
          size="md"
          width="full"
        />
      </div>
    </div>
  );
};

export default Notification;
