import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
      await register(form);
      navigate("/dashboard", { replace: true });
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
          src="/Tech%26Gologo.svg"
          alt="Tech It & Go!"
        />
        <p className="eyebrow">Join Tech It & Go!</p>
        <h1>Create an Account</h1>
        <p>Create an account so you can submit and manage technology requests.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={updateForm}
              required
            />
          </label>

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
              autoComplete="new-password"
              minLength="8"
              value={form.password}
              onChange={updateForm}
              required
            />
          </label>

          <button className="button primary" type="submit" disabled={submitting}>
            {submitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p className="form-switch">
          Already have an account? <Link to="/login">Log in here.</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
