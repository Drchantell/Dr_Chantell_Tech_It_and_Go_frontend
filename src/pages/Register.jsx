import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Registration form is ready. Backend account creation will be connected next.");
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
            <input type="text" name="name" autoComplete="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>

          <label>
            Password
            <input type="password" name="password" autoComplete="new-password" minLength="8" required />
          </label>

          <button className="button primary" type="submit">Create Account</button>
        </form>

        {message && <p className="form-message">{message}</p>}

        <p className="form-switch">
          Already have an account? <Link to="/login">Log in here.</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
