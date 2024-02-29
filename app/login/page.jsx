import styles from "@/app/ui/login/login.module.css";
import { authenticate, authenticateUser } from "../lib/actions";
import LoginForm from "@/app/ui/login/loginForm/loginForm";

export default function page() {
  return (
    <main className={styles.container}>
      <LoginForm />
    </main>
  );
}
