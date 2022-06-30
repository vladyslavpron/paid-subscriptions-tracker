import { BADHINTS } from "dns";
import React, { useState } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { SubscriptionActionCreators } from "../../store/reducers/subscription/action-creators";
import { ISubscription } from "../../types/ISubscription";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import UpdateSubscriptionForm from "../updateSubscriptionForm/UpdateSubscriptionForm";
import styles from "./SubscriptionsList.module.css";
import modifyIcon from "./modifyIcon.png";

interface props {
  subscriptions: ISubscription[];
}

const SubscriptionsList = ({ subscriptions }: props) => {
  const dispatch = useTypedDispatch();

  const [modal, setModal] = useState(false);

  const [chosenSubscription, setChosenSubscription] = useState<ISubscription>(
    {} as ISubscription
  );

  const updateSubscription = (subscription: ISubscription) => {
    dispatch(SubscriptionActionCreators.updateSubscription(subscription));
    setModal(false);
  };

  const updateButtonHandler = (subscription: ISubscription) => {
    setChosenSubscription(subscription);
    setModal(true);
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableRow}>
            <td className={styles.tableHead}>#</td>
            <th className={styles.tableHead}>Title</th>
            <th className={styles.tableHead}>Price</th>
            <th className={styles.tableHead}>Starting date</th>
            <th className={styles.tableHead}>Cancellation date</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription, i) => (
            <tr className={styles.tableRow} key={subscription.id}>
              <td className={styles.tableData}>{i + 1}</td>
              <td className={styles.tableData}>{subscription.title}</td>
              <td className={styles.tableData}>{subscription.price}</td>
              <td className={styles.tableData}>{subscription.startDate}</td>
              <td className={styles.tableData}>{subscription.endDate}</td>
              <td className={styles.tableData}>
                <img
                  className={styles.sub__modifyBtn}
                  src={modifyIcon}
                  alt="modify Subscription Icon"
                  onClick={() => updateButtonHandler(subscription)}
                ></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal active={modal} setActive={setModal}>
        <UpdateSubscriptionForm
          subscription={chosenSubscription}
          updateSubscription={updateSubscription}
        />
      </Modal>
    </div>
  );
};

export default SubscriptionsList;
