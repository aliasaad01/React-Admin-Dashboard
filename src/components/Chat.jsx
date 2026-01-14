import { useRef, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useStateContext } from "../contexts/contextProvider";

const Chat = () => {
  const { currentColor, handleClick } = useStateContext();
  const chatRef = useRef(null);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello 👋", from: "other" },
    { id: 2, text: "How can I help you?", from: "other" },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        handleClick("chat");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: input, from: "me" },
    ]);
    setInput("");
  };

  return (
    <div
      ref={chatRef}
      className="absolute right-5 top-16 w-80 bg-white dark:bg-secondary-dark-bg
                rounded-xl shadow-xl p-4 z-50"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-3 dark:text-gray-200">
        <p className="font-semibold text-lg">Chat</p>
        <button
          onClick={() => handleClick("chat")}
          className="p-1 hover:bg-light-gray dark:hover:bg-main-dark-bg rounded-full transition-all"
        >
          <MdClose className="text-xl text-gray-500 dark:text-gray-200" />
        </button>
      </div>

      {/* Messages List */}
      <div className="h-48 overflow-y-auto space-y-2 mb-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-lg text-sm w-fit max-w-[75%] dark:text-gray-200
              ${
                msg.from === "me"
                  ? "ml-auto bg-blue-500 text-white mr-2"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input + Send */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 rounded-lg border
                    dark:bg-secondary-dark-bg outline-none
                      dark:caret-white dark:text-white"
        />

        <button
          onClick={handleSend}
          style={{ backgroundColor: currentColor }}
          className="px-4 py-2 rounded-lg text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
