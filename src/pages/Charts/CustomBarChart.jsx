import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { barChartDataFormatted } from "../../data/dummy";
import { ChartsHeader, Header } from "../../components";

const CustomBarChart = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={"Chart"} title={"Bar"} />

      <div className="w-full h-[350px] pb-10">
        <ChartsHeader header={"AAPLE Historical"} />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barChartDataFormatted}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="Gold" fill="#FFD700">
              <LabelList
                dataKey="Gold"
                position="top"
                fill="#ffffff"
                fontWeight="600"
              />
            </Bar>
            <Bar dataKey="Silver" fill="#C0C0C0">
              <LabelList
                dataKey="Silver"
                position="top"
                fill="#ffffff"
                fontWeight="600"
              />
            </Bar>
            <Bar dataKey="Bronze" fill="#CD7F32">
              <LabelList
                dataKey="Bronze"
                position="top"
                fill="#ffffff"
                fontWeight="600"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomBarChart;
