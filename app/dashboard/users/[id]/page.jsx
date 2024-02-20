import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

export default function page() {
  return (
    <main className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="user" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className={styles.input}
            placeholder="john"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Email@ john.com"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="password"
          />
          <label>Phone</label>
          <input
            type="number"
            className={styles.input}
            placeholder="1234567890"
          />
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            rows="2"
            className={styles.textarea}
            placeholder="Address"
            required
          ></textarea>
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className={styles.select}
            required
          >
            <option value={false}>Is admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className={styles.select}
            required
          >
            <option value={true}>Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className={styles.button} type="submit">
            Update
          </button>
        </form>
      </div>
    </main>
  );
}
