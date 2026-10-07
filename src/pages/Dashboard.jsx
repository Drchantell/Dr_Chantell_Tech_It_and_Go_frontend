import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section className="section page-section">
      <div className="dashboard-header">
        <div>
          <img
            className="branding-logo dashboard-brand"
            src="/Tech%26Gologo.svg"
            alt="Tech It & Go!"
          />
          <p className="eyebrow">My Dashboard</p>
          <h1>My Borrowing Requests</h1>
          <p>
            This area will show the requests connected to the logged-in user
            after authentication and MongoDB are connected.
          </p>
        </div>

        <Link className="button primary" to="/equipment">
          Browse Equipment
        </Link>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span>Pending</span>
          <strong>0</strong>
          <p>Requests waiting for review</p>
        </article>

        <article className="dashboard-card">
          <span>Approved</span>
          <strong>0</strong>
          <p>Approved borrowing requests</p>
        </article>

        <article className="dashboard-card">
          <span>Total</span>
          <strong>0</strong>
          <p>Requests connected to your account</p>
        </article>
      </div>

      <div className="empty-state dashboard-empty">
        <h2>No saved requests yet.</h2>
        <p>
          Once we connect the backend, your submitted requests will appear here
          and stay saved after you refresh the page.
        </p>
        <Link to="/equipment">Find something to borrow →</Link>
      </div>
    </section>
  );
}

export default Dashboard;
