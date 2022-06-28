import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";
import NewSubscriptionForm from "../components/newSubscriptionForm/NewSubscriptionForm";
import SubscriptionsList from "../components/subscriptionsList/SubscriptionsList";
import { useTypedDispatch } from "../hooks/useTypedDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { SubscriptionActionCreators } from "../store/reducers/subscription/action-creators";
import styles from "./Dashboard.module.css";

import calculateClosestPaymentDate from "../utils/calculateClosestPaymentDate";
import { ISubscription } from "../types/ISubscription";
import moment from "moment";
import calculateTotalSpendings from "../utils/calculateTotalSpendings";
import calculateMonthlySpendings from "../utils/calculateMonthlySpendings";

const Dashboard = () => {
  const dispatch = useTypedDispatch();
  const { subscriptions } = useTypedSelector((state) => state.subscription);

  const [modalActive, setModalActive] = useState(false);

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

  const closestPaymentDate = calculateClosestPaymentDate(subscriptions);
  const totalSpendings = calculateTotalSpendings(subscriptions);
  const monthlySpendings = calculateMonthlySpendings(subscriptions);

  useEffect(() => {
    dispatch(SubscriptionActionCreators.fetchSubscriptions());
  }, [dispatch]);

  return (
    <div className={styles.dashboardBlock}>
      <div className={styles.spendingsRow}>
        <Button onClick={() => setModalActive(true)}>
          Add new subscription
        </Button>
        <div>Total subscriptions: {subscriptions.length}</div>
        <div>
          Closest payment in {}
          {closestPaymentDate} {closestPaymentDate > 1 ? "days" : "day"}
        </div>
      </div>
      <div className={styles.spendingsRow}>
        <div className={styles.spendingsBlock}>
          You spend ${monthlySpendings} every month
        </div>
        <div className={styles.spendingsBlock}>You ??</div>
        <div className={styles.spendingsBlock}>
          You have spent ${totalSpendings} total
        </div>
      </div>
      <div className={styles.spendingsRow}>
        <div className={styles.spendingsBlock}>
          <SubscriptionsList subscriptions={subscriptions}></SubscriptionsList>
        </div>
        <div className={styles.spendingsBlock}>
          spendings chart for months <Line data={chartData}></Line>
        </div>
        <div className={styles.spendingsBlock}>donut graph price</div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <NewSubscriptionForm />
      </Modal>
    </div>
  );
};

export default Dashboard;
