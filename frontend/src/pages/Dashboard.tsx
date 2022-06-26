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

  useEffect(() => {
    dispatch(SubscriptionActionCreators.fetchSubscriptions());
  }, [dispatch]);

  return (
    <div className={styles.dashboardBlock}>
      <div className={styles.spendingsRow}>
        <Button onClick={() => setModalActive(true)}>
          Add new subscription
        </Button>
        <div>Total subscriptions: </div>
        <div>Closest payment date: </div>
      </div>
      <div className={styles.spendingsRow}>
        <div className={styles.spendingsBlock}>You spend $1238 every month</div>
        <div className={styles.spendingsBlock}>You spend $13 every day</div>
        <div className={styles.spendingsBlock}>You spend $42383 total</div>
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
