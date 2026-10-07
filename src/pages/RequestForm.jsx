import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { equipment } from "../data/equipment";

function RequestForm() {
  const { id } = useParams();
  const item = equipment.find((equipmentItem) => equipmentItem.id === id);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (!item) {
    return (
      <section className="section page-section">
        <div className="empty-state">
          <h1>Equipment not found.</h1>
          <Link to="/equipment">Return to the catalog</Link>
        </div>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="section page-section">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h1>Request received!</h1>
          <p>
            Your request for <strong>{item.name}</strong> has been entered as
            pending in this frontend demo.
          </p>
          <p>
            The next development step will connect this form to MongoDB so the
            request is saved to your account.
          </p>
          <Link className="button primary" to="/dashboard">Go to Dashboard</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section narrow-section">
      <Link className="back-link" to={`/equipment/${item.id}`}>
        ← Back to {item.name}
      </Link>

      <div className="form-card">
        <p className="eyebrow">Borrowing Request</p>
        <h1>Request {item.name}</h1>
        <p>Your request will be reviewed before it becomes an approved reservation.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <div className="form-row">
            <label>
              Checkout Date
              <input type="date" name="checkoutDate" required />
            </label>

            <label>
              Return Date
              <input type="date" name="returnDate" required />
            </label>
          </div>

          <label>
            How will you use this equipment?
            <textarea name="purpose" rows="5" required />
          </label>

          <button className="button primary" type="submit">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default RequestForm;
