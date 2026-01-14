import { ChartsHeader, CustomLineChart, Header } from "../../components";
const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category={"Chart"} title={"Line"} />

      <div className="w-full">
        <ChartsHeader header={"Inflation Rate"} />
        <CustomLineChart />
      </div>
    </div>
  );
};

export default Line;
