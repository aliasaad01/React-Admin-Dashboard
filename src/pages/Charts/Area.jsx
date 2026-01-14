import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { ChartsHeader, Header } from "../../components";
import { areaChartDataFormatted } from "../../data/dummy";

const Aria = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={"Chart"} title={"Area"} />

      <div className="w-full h-[350px] pb-10">
        <ChartsHeader header={"Inflation Rate in Percentage"} />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={areaChartDataFormatted}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 4]} tickFormatter={(val) => `${val}%`} />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="USA"
              stroke="#6366f1"
              fill="#6366f155"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="France"
              stroke="#10b981"
              fill="#10b98155"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="Germany"
              stroke="#f97316"
              fill="#f9731655"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Aria;
