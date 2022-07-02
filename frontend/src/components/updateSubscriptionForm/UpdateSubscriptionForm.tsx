import React, { FormEvent, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ISubscription } from "../../types/ISubscription";
import Button from "../button/Button";
import Input from "../input/Input";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import styles from "./UpdateSubscriptionForm.module.css";

interface props {
  subscription: ISubscription;
  updateSubscription: (subscription: ISubscription) => void;
}

const UpdateSubscriptionForm = ({
  subscription,
  updateSubscription,
}: props) => {
  const { error, isLoading } = useTypedSelector((state) => state.subscription);

  const [sub, setSub] = useState<ISubscription>(subscription);

  useEffect(() => {
    setSub(subscription);
  }, [subscription]);

  const updateSub = (event: FormEvent) => {
    event.preventDefault();
    updateSubscription(sub);
  };
  // console.log(error);

  return (
    <form className={styles.form} onSubmit={(event) => updateSub(event)}>
      <h1 className={styles.header}>Update subscription</h1>
      <hr className={styles.hr} />
      {error && <div className={styles.error}>{error}</div>}
      <Input
        onChange={(e) => setSub((sub) => ({ ...sub, title: e.target.value }))}
        input={sub.title || ""}
        label="Title: "
      ></Input>
      <Input
        onChange={(e) =>
          setSub((sub) => ({ ...sub, price: Number(e.target.value) }))
        }
        input={sub.price || ""}
        label="Price: "
        type="number"
      ></Input>
      <Input
        onChange={(e) =>
          setSub((sub) => ({ ...sub, startDate: e.target.value }))
        }
        input={sub.startDate || ""}
        label="Starting date: "
        type="date"
      ></Input>
      <Input
        onChange={(e) => setSub((sub) => ({ ...sub, endDate: e.target.value }))}
        input={sub.endDate || ""}
        label="Cancellation date: "
        type="date"
      ></Input>
      <br />
      <Button>Update subscription</Button>
      {isLoading && <LoadingSpinner />}
    </form>
  );
};

export default UpdateSubscriptionForm;
