import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ISubscription } from "../../types/ISubscription";

interface props {
  subscriptions: ISubscription[];
}

const DoughnutChart = ({ subscriptions }: props) => {
  function chartLabelsAndData(
    subscriptions: ISubscription[]
  ): [string[], number[]] {
    const labelsSet = new Set();
    const chartData: number[] = [];
    subscriptions.forEach((sub) => {
      if (!sub.endDate) {
        labelsSet.add(sub.title);
        chartData.push(sub.price);
      }
    });
    return [Array.from(labelsSet) as string[], chartData];
  }

  const chartData = chartLabelsAndData(subscriptions);

  const backgroundColors = [
    "#0074D9",
    "#FF4136",
    "#2ECC40",
    "#FF851B",
    "#7FDBFF",
    "#B10DC9",
    "#FFDC00",
    "#001f3f",
    "#39CCCC",
    "#01FF70",
    "#85144b",
    "#F012BE",
    "#3D9970",
    "#111111",
    "#AAAAAA",
  ];

  const chart = {
    labels: chartData[0],
    datasets: [
      {
        backgroundColor: backgroundColors,
        data: chartData[1],
        borderColor: "teal",
      },
    ],
  };

  return <Doughnut data={chart}></Doughnut>;
};

export default DoughnutChart;
