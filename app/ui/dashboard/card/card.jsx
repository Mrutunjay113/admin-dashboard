import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.text}>
        <span className={styles.title}>Total user</span>
        <span className={styles.number}>100</span>
        <span className={styles.detail}>
          <span className={styles.positive}>more than previous week</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
