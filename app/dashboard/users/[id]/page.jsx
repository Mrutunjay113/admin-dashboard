import { updateUser } from "@/app/lib/actions";
import { fetchUser, fetchUsers } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

export default async function page({ params }) {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <main className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user?.img || "/noavatar.png"} alt="user" fill />
        </div>
        {user?.username}
      </div>
      <div className={styles.formContainer}>
        <form className={styles?.form} action={updateUser}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input
            type="text"
            name="username"
            className={styles.input}
            placeholder={user.username}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder={user.email}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder={user.password}
          />
          <label>Phone</label>
          <input
            type="number"
            className={styles.input}
            placeholder={user.phone}
          />
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            rows="2"
            className={styles.textarea}
            placeholder={user.address}
            required
          ></textarea>
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className={styles.select}
            required
          >
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className={styles.select}
            required
          >
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button className={styles.button} type="submit">
            Update
          </button>
        </form>
      </div>
    </main>
  );
}
