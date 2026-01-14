import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { PyramidData } from "../../data/dummy";
import { ChartsHeader, Header } from "../../components";

const Pyramid = () => {
  const colors = [
    "#6366F1",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#3B82F6",
    "#8B5CF6",
  ];

  const data = [...PyramidData].sort((a, b) => b.y - a.y);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={"Chart"} title={"Pyramid"} />

      <div className="w-full h-[350px]">
        <ChartsHeader header={"Food Comarison Chart"} />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="x" hide />

            <Tooltip formatter={(value) => `${value} cal`} />

            <Bar dataKey="y" radius={[0, 10, 10, 0]}>
              <LabelList
                dataKey="text"
                position="insideRight"
                fill="#fff"
                fontWeight="600"
              />

              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
        {data.map((item, index) => (
          <div key={item.x} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: colors[index % colors.length] }}
            />
            <span className="text-gray-700 dark:text-gray-300">{item.x}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pyramid;
