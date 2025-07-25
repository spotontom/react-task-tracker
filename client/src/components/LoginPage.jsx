// client/src/components/LoginPage.jsx
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage({ onLogin }) {
  const [error, setError] = useState("");

  const handleLoginSubmit = async ( username, password) => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await response.json(); // { tasks: [...] }
      console.log("Login response from server:", data);
      onLogin(data.username, data.email, data.tasks); // Send email and tasks up to App
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLoginSubmit} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
