import { stackedData2 } from "../data/dummy";

const StackedDataTable = () => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl p-4 mt-4">
      <table className="w-full text-sm">
        <thead className="text-gray-500 dark:text-gray-400">
          <tr>
            <th className="text-left pb-2">Month</th>
            <th className="text-right pb-2">Budget</th>
            <th className="text-right pb-2">Expense</th>
            <th className="text-right pb-2">Remaining</th>
          </tr>
        </thead>

        <tbody>
          {stackedData2.map((item) => (
            <tr key={item.month} className="border-t dark:border-gray-700">
              <td className="py-2 dark:text-white">{item.month}</td>
              <td className="py-2 text-right dark:text-white">{item.budget}</td>
              <td className="py-2 text-right dark:text-white">
                {item.expense}
              </td>
              <td className="py-2 text-right font-medium text-emerald-600">
                {item.budget - item.expense}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StackedDataTable;
