import { salesData } from "../data/dummy";

const SalesTable = () => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl p-4 h-full">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">
        Monthly Sales
      </h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500 dark:text-gray-400">
          <tr>
            <th className="text-left pb-2">Month</th>
            <th className="text-right pb-2">Sales ($)</th>
            <th className="text-right pb-2">Orders</th>
          </tr>
        </thead>

        <tbody>
          {salesData.map((item) => (
            <tr key={item.month} className="border-t dark:border-gray-700">
              <td className="py-2 dark:text-white">{item.month}</td>
              <td className="py-2 text-right dark:text-white">
                {item.sales.toLocaleString()}
              </td>
              <td className="py-2 text-right dark:text-white">{item.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
