const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 transition-all duration-300 hover:shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
