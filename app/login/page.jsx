import styles from "@/app/ui/login/login.module.css";

export default function page() {
  return (
    <main className={styles.container}>
      <form className={styles.form} action="">
        <div>
          <h1 className={styles.title}>Welcome Back!</h1>
          <p className={styles.subtitle}>Login to your account</p>
        </div>

        <label for="email">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={styles.input}
          />
          <span>Email</span>
        </label>
        <label for="password">
          <input type="password" id="password" placeholder="Password" />
          <span>Password</span>
        </label>

        {/* <input type="text" className={styles.input} placeholder="Username" /> */}

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
