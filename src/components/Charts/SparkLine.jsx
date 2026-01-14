import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

const sparklineData = [
  { x: "Jan", sales: 4 },
  { x: "Feb", sales: 14 },
  { x: "Mar", sales: 50 },
  { x: "Apr", sales: 35 },
  { x: "May", sales: 65 },
  { x: "Jun", sales: 70 },
  { x: "Jul", sales: 95 },
];

const SparkLine = () => {
  return (
    <div
      className="bg-white dark:bg-secondary-dark-bg rounded-3xl p-4 border"
      style={{ height: "220px", width: "100%" }}
    >
      <h3 className="text-gray-700 dark:text-white mb-2 text-sm">
        Monthly Sales
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={sparklineData}>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#facc15"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;
