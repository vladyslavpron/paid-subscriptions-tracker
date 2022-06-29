import moment from "moment";
import React from "react";
import { Line } from "react-chartjs-2";
import { ISubscription } from "../../types/ISubscription";

interface props {
  subscriptions: ISubscription[];
}

const SpendingsChart = ({ subscriptions }: props) => {
  function chartLabels(subscriptions: ISubscription[]): string[] {
    const labelsSet = new Set();
    subscriptions.forEach((sub) => labelsSet.add(sub.startDate));
    return Array.from(labelsSet).sort() as string[];
  }
  function chartData(subscriptions: ISubscription[], labels: string[]) {
    const labelsDates = labels.map((label) => moment(label));
    const data: number[] = new Array(labels.length).fill(0, 0, labels.length);
    subscriptions.forEach((sub) => {
      labelsDates.forEach((labelDate, i) => {
        const startDiff = labelDate.diff(moment(sub.startDate));
        if (startDiff >= 0 && !sub.endDate) {
          data[i] += sub.price;
        } else if (sub.endDate) {
          const endDiff = labelDate.diff(moment(sub.endDate));
          if (startDiff >= 0 && endDiff <= 0) {
            data[i] += sub.price;
          }
        }
      });
    });
    return data;
  }

  const labels = chartLabels(subscriptions);
  const data = chartData(subscriptions, labels);
  const chart = {
    labels,
    datasets: [
      {
        label: "Monthly spendings",
        backgroundColor: "teal",
        data,
        borderColor: "wheat",
      },
    ],
  };

  return <Line data={chart}></Line>;
};

export default SpendingsChart;
