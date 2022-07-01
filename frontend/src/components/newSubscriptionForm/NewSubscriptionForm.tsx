import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ISubscription } from "../../types/ISubscription";
import Button from "../button/Button";
import Input from "../input/Input";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import styles from "./NewSubscriptionForm.module.css";

interface props {
  modalActive: boolean;
  setModalActive: Dispatch<SetStateAction<boolean>>;

  createSubscription: (subscription: ISubscription) => void;
}

const NewSubscriptionForm = ({
  createSubscription,
  modalActive,
  setModalActive,
}: props) => {
  const { error, isLoading } = useTypedSelector((state) => state.subscription);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [startDate, setStartDate] = useState("");

  const createSub = async (event: FormEvent) => {
    event.preventDefault();
    createSubscription({
      title,
      price,
      startDate,
    } as ISubscription);
  };

  return (
    <form className={styles.form}>
      <h1 className={styles.header}>Add new subscription</h1>
      <hr className={styles.hr} />
      {error && <div className={styles.error}>{error}</div>}
      <Input
        onChange={(e) => setTitle(e.target.value)}
        input={title}
        label="Title: "
      ></Input>
      <Input
        onChange={(e) => setPrice(Number(e.target.value))}
        input={price}
        label="Price: "
        type="number"
      ></Input>
      <Input
        onChange={(e) => setStartDate(e.target.value)}
        input={startDate}
        label="Starting date: "
        type="date"
      ></Input>
      <br />
      <Button onClick={(event) => createSub(event)}>
        Create new subscription
      </Button>
      {isLoading && <LoadingSpinner />}
    </form>
  );
};

export default NewSubscriptionForm;
