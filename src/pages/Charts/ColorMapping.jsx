import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { colorMappingData } from "../../data/dummy";
import { ChartsHeader, Header } from "../../components";

const getColor = (value) => {
  if (value <= 10) return "#FFFF99";
  if (value <= 20) return "#FFA500";
  return "#FF4040";
};

const ColorMapping = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category={"Chart"} title={"Color Mapping"} />

    <div className="w-full h-[350px] pb-10">
      <ChartsHeader header={"USA Climate - Weather by month"} />
      <ResponsiveContainer width="100%" height={"100%"}>
        <BarChart
          data={colorMappingData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="month" />
          <YAxis
            label={{
              value: "Temperature °C",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Bar dataKey="temp">
            {colorMappingData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.temp)} />
            ))}
          </Bar>
        </BarChart>{" "}
      </ResponsiveContainer>
    </div>
  </div>
);

export default ColorMapping;
