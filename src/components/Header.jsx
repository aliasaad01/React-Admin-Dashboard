const Header = ({ category, title, darkBg }) => {
  return (
    <div className="mb-10 pt-4 pl-1">
      <p className="text-gray-400">{category}</p>
      <p
        className={`text-3xl font-extralight tracking-tight text-slate-900 ${darkBg} dark:text-gray-200`}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;
