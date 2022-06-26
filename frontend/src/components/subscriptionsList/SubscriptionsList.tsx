import React from "react";
import { ISubscription } from "../../types/ISubscription";
import styles from "./SubscriptionsList.module.css";

interface props {
  subscriptions: ISubscription[];
}

const SubscriptionsList = ({ subscriptions }: props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableRow}>
          <td className={styles.tableHead}>#</td>
          <th className={styles.tableHead}>Title</th>
          <th className={styles.tableHead}>Price</th>
          <th className={styles.tableHead}>Starting date</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((subscription, i) => (
          <tr className={styles.tableRow} key={subscription.id}>
            <td className={styles.tableData}>{i + 1}</td>
            <td className={styles.tableData}>{subscription.title}</td>
            <td className={styles.tableData}>{subscription.price}</td>
            <td className={styles.tableData}>{subscription.startDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubscriptionsList;
