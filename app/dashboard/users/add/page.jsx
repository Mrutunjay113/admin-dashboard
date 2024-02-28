import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
export default function page() {
  return (
    <main className={styles.container}>
      <form className={styles.form} action={addUser}>
        <input
          type="text"
          className={styles.input}
          placeholder="username"
          name="username"
          required
        />
        <input
          type="email"
          className={styles.input}
          placeholder="email"
          name="email"
          required
        />
        <input
          type="text"
          className={styles.input}
          placeholder="password"
          name="password"
          required
        />
        <input
          type="number"
          className={styles.input}
          placeholder="phone"
          name="phone"
          required
        />
        <select name="isAdmin" id="isAdmin" className={styles.select} required>
          <option value={false}>Is admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
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

        <textarea
          name="address"
          id="address"
          rows="16"
          className={styles.textarea}
          placeholder="Address"
          required
        ></textarea>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
