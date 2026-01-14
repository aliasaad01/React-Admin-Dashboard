import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { stackedChartData } from "../../data/dummy";
import { Header } from "../../components";

const Stacked = () => {
  const chartData = stackedChartData[0].map((item, index) => ({
    name: item.x,
    Expense: stackedChartData[0][index].y,
    Budget: stackedChartData[1][index].y,
  }));

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Stacked" />

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Expense" stackId="a" fill="#6b7280" />
            <Bar dataKey="Budget" stackId="a" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stacked;
