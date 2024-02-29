"use client";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  console.log(state);

  return (
    <form className={styles.form} action={formAction}>
      <div>
        <h1 className={styles.title}>Welcome Back!</h1>
        <p className={styles.subtitle}>Login to your account</p>
      </div>

      <label for="username">
        <input
          type="username"
          id="username"
          name="username"
          placeholder="username"
          className={styles.input}
        />
        <span>Username</span>
      </label>
      <label for="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <span>Password</span>
      </label>

      {/* <input type="text" className={styles.input} placeholder="Username" /> */}

      <button type="submit">Login</button>
      {state?.error && <p>{state?.error}</p>}
    </form>
  );
};

export default LoginForm;
