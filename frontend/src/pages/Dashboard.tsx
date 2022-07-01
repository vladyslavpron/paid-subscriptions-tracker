import React, { useEffect, useState } from "react";
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
import calculateTotalSpendings from "../utils/calculateTotalSpendings";
import calculateMonthlySpendings from "../utils/calculateMonthlySpendings";
import SpendingsChart from "../components/spendingsChart/SpendingsChart";
import DoughnutChart from "../components/doughnutChart/DoughnutChart";

const Dashboard = () => {
  const dispatch = useTypedDispatch();
  const { subscriptions } = useTypedSelector((state) => state.subscription);

  const [newSubModalActive, setNewSubModalActive] = useState(false);

  const closestPaymentDate = calculateClosestPaymentDate(subscriptions);
  const totalSpendings = calculateTotalSpendings(subscriptions);
  const monthlySpendings = calculateMonthlySpendings(subscriptions);

  useEffect(() => {
    dispatch(SubscriptionActionCreators.fetchSubscriptions());
  }, [dispatch]);

  const createSubscription = (subscription: ISubscription) => {
    dispatch(SubscriptionActionCreators.createSubscription(subscription));
    setNewSubModalActive(false);
  };

  console.log("dashborad render");

  return (
    <div className={styles.dashboardBlock}>
      <div className={styles.spendingsRow}>
        <Button onClick={() => setNewSubModalActive(true)}>
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
          spendings chart for months
          <SpendingsChart subscriptions={subscriptions} />
        </div>
        <div className={styles.spendingsBlock}>
          donut graph price
          <DoughnutChart subscriptions={subscriptions} />
        </div>
      </div>
      <Modal active={newSubModalActive} setActive={setNewSubModalActive}>
        <NewSubscriptionForm
          createSubscription={createSubscription}
          modalActive={newSubModalActive}
          setModalActive={setNewSubModalActive}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
