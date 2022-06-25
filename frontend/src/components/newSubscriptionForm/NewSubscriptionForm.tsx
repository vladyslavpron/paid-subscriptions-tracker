import React, { useState } from "react";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./NewSubscriptionForm.module.css";

const NewSubscriptionForm = () => {
  const dispatch = useTypedDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [startDate, setStartDate] = useState("");
  console.log(startDate);

  return (
    <form className={styles.form}>
      <h1 className={styles.header}>Add new subscription</h1>
      <hr className={styles.hr} />
      <Input
        onChange={(e) => setTitle(e.target.value)}
        input={title}
        label="Title: "
      ></Input>
      <Input
        onChange={(e) => setPrice(Number(e.target.value))}
        input={price}
        label="Price: "
      ></Input>
      <Input
        onChange={(e) => setStartDate(e.target.value)}
        input={startDate}
        label="Starting date: "
        type="date"
      ></Input>
      <Button onClick={}>Create new subscription</Button>
    </form>
  );
};

export default NewSubscriptionForm;
