import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { financialChartData } from "../../data/dummy";
import { Header } from "../../components";

const Financial = () => {
  const barChartData = financialChartData.map((item) => ({
    date: item.x.toISOString().split("T")[0],
    close: item.close,
    volume: item.volume,
  }));

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={"Chart"} title={"Financial"} />

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} minTickGap={20} />
            <YAxis domain={[100, 180]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="close" name="Close Price" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financial;
