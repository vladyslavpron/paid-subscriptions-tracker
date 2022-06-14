import React from "react";
import { Line } from "react-chartjs-2";
import Button from "../components/button/Button";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const chartData = {
    labels: ["$123", "$12123", "$1223"],
    datasets: [
      {
        label: "myline",
        backgroundColor: "wheat",
        data: [10, 100, 50],
        borderColor: "black",
      },
    ],
  };

  return (
    <div className={styles.dashboardBlock}>
      <div className={styles.spendingsRow}>
        <Button>Add new subscription</Button>
        <div>Total subscriptions: </div>
        <div>Closest payment date: </div>
      </div>
      <div className={styles.spendingsRow}>
        <div className={styles.spendingsBlock}>You spend $1238 every month</div>
        <div className={styles.spendingsBlock}>You spend $13 every day</div>
        <div className={styles.spendingsBlock}>You spend $42383 total</div>
      </div>
      <div className={styles.spendingsRow}>
        <div className={styles.spendingsBlock}>list with subscriptions </div>
        <div className={styles.spendingsBlock}>
          spendings chart for months <Line data={chartData}></Line>
        </div>
        <div className={styles.spendingsBlock}>donut graph price</div>
      </div>
    </div>
  );
};

export default Dashboard;
