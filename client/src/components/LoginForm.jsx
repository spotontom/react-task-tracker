// client/src/components/LoginForm.jsx
import { useState } from "react";
import styles from "./LoginForm.module.css";

// This component is now "dumb": it just renders UI and calls props.onSubmit
export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // 🔁 Instead of authenticating here, we pass values up to the parent
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <h2>Login</h2>
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className={styles.input}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Log In
      </button>
    </form>
  );
}
