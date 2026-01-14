import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lineChartData } from "../../data/dummy";

const CustomLineChart = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="Germany"
            stroke="#6366f1"
            strokeWidth={2}
            dot
          />

          <Line
            type="monotone"
            dataKey="England"
            stroke="#10b981"
            strokeWidth={2}
            dot
          />

          <Line
            type="monotone"
            dataKey="India"
            stroke="#f97316"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
