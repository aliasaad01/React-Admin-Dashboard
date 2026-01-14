import { GoDotFill } from "react-icons/go";

import { Pie2, Button, SparkLine } from "../components";
import { earningData } from "../data/dummy";
import { useStateContext } from "../contexts/contextProvider";
import DashboardTable from "../components/DashboardTable";
import SalesTable from "../components/SalesTable";
import SalesLineChart from "../components/Charts/SalesLineChart";
import StackedBarChart from "../components/Charts/StackedBarChart";
import StackedDataTable from "../components/StackedDataTable";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-6 p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44
                        rounded-xl w-full lg:w-80 p-8 pt-9 bg-hero-pattern bg-no-repeat 
                        bg-cover bg-center flex-1
                        hover:shadow-xl transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earning</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size={"md"}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44
                          md:w-56 p-4 pt-9 rounded-2xl
                          hover:shadow-xl transition-all duration-300"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:shadow-md transition-all duration-300"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className="text-sm ml-2" style={{ color: item.pcColor }}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
                          p-4 rounded-2xl md:max-w-[780px] w-full
                          hover:shadow-xl transition-all duration-300
                          min-h-[420px]"
        >
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-200 hover:shadow-xl transition-all duration-300">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-400 hover:shadow-xl transition-all duration-300">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-6 flex-wrap justify-center">
            <div className="sm:border-r-1 border-color m-4 pr-10 flex-1">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 text-white hover:shadow-xl transition-all duration-300 cursor-pointer rounded-full bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="text-gray-500 mt-1 ">Expense</p>
              </div>

              <div className="mt-5 h-[250px]">
                <SparkLine />
              </div>
              <div className="mt-5">
                <Button
                  color={"white"}
                  bgColor={currentColor}
                  text={"Download Report"}
                  borderRadius={"10px"}
                  size={"md"}
                />
              </div>
            </div>

            <div className="flex-1">
              <StackedBarChart />
              <StackedDataTable />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
                          p-4 rounded-2xl flex-1
                          hover:shadow-xl transition-all duration-300
                          min-h-[420px]"
        >
          <Pie2 />
          <DashboardTable />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* Table */}
        <div className="lg:col-span-1 min-h-[320px] rounded-2xl hover:shadow-xl transition-all duration-300">
          <SalesTable />
        </div>

        {/* Chart */}
        <div className="lg:col-span-2 min-h-[320px] rounded-2xl hover:shadow-xl transition-all duration-300">
          <SalesLineChart />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
