import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { stackedChartData } from "../../data/dummy";

const chartData = stackedChartData[0].map((item, index) => ({
  name: item.x,
  Expense: stackedChartData[0][index].y,
  Budget: stackedChartData[1][index].y,
}));

const Stacked = () => {
  return (
    <div className="w-[280px] h-full bg-white p-4 rounded-lg shadow">
      <ResponsiveContainer width="100%" height={"100%"}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Expense" stackId="a" fill="#6b7280" />
          <Bar dataKey="Budget" stackId="a" fill="#4ade80" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stacked;
