import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { dashboardPieData } from "../../data/dummy";

const COLORS = ["#10b981", "#6366f1", "#f97316"];

const totalSales = 12450;
const percentage = 72;

const Pie2 = () => {
  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl p-4 h-[260px] flex flex-col">
      <h3 className="text-sm font-semibold mb-2 dark:text-white">
        Yearly Sales
      </h3>

      <div className="flex-1 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dashboardPieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={70}
              paddingAngle={3}
            >
              {dashboardPieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xs text-gray-400">Total</span>
          <span className="text-lg font-bold dark:text-white">
            ${totalSales.toLocaleString()}
          </span>
          <span className="text-sm text-green-500 font-semibold">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pie2;
