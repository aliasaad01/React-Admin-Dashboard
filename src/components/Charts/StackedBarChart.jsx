import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { stackedData2 } from "../../data/dummy";

const StackedBarChart = () => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl p-4">
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stackedData2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="budget" stackId="a" fill="#6366f1" name="Budget" />
            <Bar dataKey="expense" stackId="a" fill="#f97316" name="Expense" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedBarChart;
