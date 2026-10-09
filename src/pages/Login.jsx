import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login, isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  function updateForm(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await login(form);
      navigate(location.state?.from || "/dashboard", { replace: true });
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="section page-section narrow-section">
      <div className="form-card">
        <img
          className="branding-logo auth-logo"
          src="/tech-it-go-logo.png"
          alt="Tech It & Go!"
        />
        <p className="eyebrow">Welcome Back</p>
        <h1>Log In</h1>
        <p>Use your Tech It & Go! account to manage your borrowing requests.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={updateForm}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={form.password}
              onChange={updateForm}
              required
            />
          </label>

          <button className="button primary" type="submit" disabled={submitting}>
            {submitting ? "Logging In..." : "Log In"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p className="form-switch">
          Need an account? <Link to="/register">Sign up here.</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
