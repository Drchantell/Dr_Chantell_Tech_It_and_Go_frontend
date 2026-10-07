import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Login form is ready. Backend authentication will be connected next.");
  }

  return (
    <section className="section page-section narrow-section">
      <div className="form-card">
        <p className="eyebrow">Welcome Back</p>
        <h1>Log In</h1>
        <p>Use your Tech It & Go! account to manage your borrowing requests.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>

          <label>
            Password
            <input type="password" name="password" autoComplete="current-password" required />
          </label>

          <button className="button primary" type="submit">Log In</button>
        </form>

        {message && <p className="form-message">{message}</p>}

        <p className="form-switch">
          Need an account? <Link to="/register">Sign up here.</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
