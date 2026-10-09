import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../services/api";

function RequestForm() {
  const { id } = useParams();
  const { user } = useAuth();
  const [item, setItem] = useState(null);
  const [form, setForm] = useState({
    checkoutDate: "",
    returnDate: "",
    purpose: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function loadEquipment() {
      try {
        const data = await apiRequest(`/equipment/${id}`);
        setItem(data.equipment);
      } catch (requestError) {
        setError(requestError.message);
      } finally {
        setLoading(false);
      }
    }

    loadEquipment();
  }, [id]);

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
      await apiRequest("/requests", {
        method: "POST",
        body: JSON.stringify({
          equipmentId: id,
          checkoutDate: form.checkoutDate,
          returnDate: form.returnDate,
          purpose: form.purpose,
        }),
      });
      setSubmitted(true);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <section className="section page-section">
        <p>Loading request form...</p>
      </section>
    );
  }

  if (!item) {
    return (
      <section className="section page-section">
        <div className="empty-state">
          <h1>Equipment not found.</h1>
          <p>{error}</p>
          <Link to="/equipment">Return to the catalog</Link>
        </div>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="section page-section narrow-section">
        <div className="success-card">
          <img
            className="branding-logo auth-logo"
            src="/tech-it-go-logo.png"
            alt="Tech It & Go!"
          />
          <div className="success-icon">✓</div>
          <h1>Request saved!</h1>
          <p>
            Your request for <strong>{item.name}</strong> is now saved as pending
            in your account.
          </p>
          <Link className="button primary" to="/dashboard">Go to Dashboard</Link>
        </div>
      </section>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="section page-section narrow-section">
      <Link className="back-link" to={`/equipment/${item._id}`}>
        ← Back to {item.name}
      </Link>

      <div className="form-card">
        <p className="eyebrow">Borrowing Request</p>
        <h1>Request {item.name}</h1>
        <p>
          Signed in as <strong>{user?.name}</strong> ({user?.email}). Your
          request will be reviewed before it becomes an approved reservation.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Checkout Date
              <input
                type="date"
                name="checkoutDate"
                min={today}
                value={form.checkoutDate}
                onChange={updateForm}
                required
              />
            </label>

            <label>
              Return Date
              <input
                type="date"
                name="returnDate"
                min={form.checkoutDate || today}
                value={form.returnDate}
                onChange={updateForm}
                required
              />
            </label>
          </div>

          <label>
            How will you use this equipment?
            <textarea
              name="purpose"
              rows="5"
              value={form.purpose}
              onChange={updateForm}
              required
            />
          </label>

          <button className="button primary" type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
}

export default RequestForm;
