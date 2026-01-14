import { ChartsHeader, Header } from "../../components";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { pieChartData } from "../../data/dummy";

const CustomPieChart = () => {
  const pieColors = [
    "#6366F1",
    "#10B981",
    "#F97316",
    "#FACC15",
    "#3B82F6",
    "#8B5CF6",
    "#EC4899",
  ];

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl h-[80vh]">
      <Header category="Chart" title="Pie" darkBg="dark:text-white" />

      <div className="w-full h-[400px]">
        <ChartsHeader header={"Project Cost Breakdown"} />
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="y"
              nameKey="x"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label={(entry) => entry.text}
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={pieColors[index % pieColors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomPieChart;
