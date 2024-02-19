import Image from "next/image";
import styles from "./transactions.module.css";
const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead className={styles}>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={400}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.completed}`}>
                Pending
              </span>
            </td>
            <td>10.02.204</td>
            <td>$122.00</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={400}
                  className={styles.userImage}
                />
                Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>done</span>
            </td>
            <td>10.02.204</td>
            <td>$40.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
