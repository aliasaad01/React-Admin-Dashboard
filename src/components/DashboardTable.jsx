const dashboardTableData = [
  {
    id: 1,
    product: "Product A",
    sales: 4200,
    status: "Completed",
  },
  {
    id: 2,
    product: "Product B",
    sales: 3100,
    status: "In Progress",
  },
  {
    id: 3,
    product: "Product C",
    sales: 2150,
    status: "Pending",
  },
  {
    id: 4,
    product: "Product D",
    sales: 3000,
    status: "Completed",
  },
];

const DashboardTable = () => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl p-4 mt-6">
      <h3 className="text-sm font-semibold mb-4 dark:text-white">
        Sales Details
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-500 dark:text-gray-400 border-b">
            <tr>
              <th className="py-2">Product</th>
              <th className="py-2">Sales</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {dashboardTableData.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-none dark:border-gray-700"
              >
                <td className="py-3 dark:text-white">{item.product}</td>

                <td className="py-3 font-semibold dark:text-white">
                  ${item.sales.toLocaleString()}
                </td>

                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ml-2
                      ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : item.status === "In Progress"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-orange-100 text-orange-600"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
