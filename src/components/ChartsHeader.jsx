const ChartsHeader = ({ header }) => {
  return (
    <div className="text-center py-2 mb-4">
      <p className="text-lg md:text-2xl font-semibold dark:text-gray-200">
        {header}
      </p>
    </div>
  );
};

export default ChartsHeader;
