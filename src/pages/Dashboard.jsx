import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { apiRequest } from "../services/api";

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toISOString().slice(0, 10);
}

function Dashboard() {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    total: 0,
    totalPages: 1,
  });
  const [page, setPage] = useState(1);
  const [editingId, setEditingId] = useState("");
  const [editForm, setEditForm] = useState({
    checkoutDate: "",
    returnDate: "",
    purpose: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadRequests(requestedPage = page) {
    try {
      setLoading(true);
      const data = await apiRequest(
        `/requests?page=${requestedPage}&limit=5`
      );
      setRequests(data.requests);
      setPagination(data.pagination);
      setError("");

      if (data.pagination.page !== requestedPage) {
        setPage(data.pagination.page);
      }
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRequests(page);
  }, [page]);

  const counts = useMemo(() => {
    return requests.reduce(
      (summary, request) => {
        if (request.status === "pending") summary.pending += 1;
        if (request.status === "approved") summary.approved += 1;
        return summary;
      },
      { pending: 0, approved: 0 }
    );
  }, [requests]);

  function startEdit(request) {
    setEditingId(request._id);
    setEditForm({
      checkoutDate: formatDate(request.checkoutDate),
      returnDate: formatDate(request.returnDate),
      purpose: request.purpose,
    });
    setMessage("");
    setError("");
  }

  function updateEditForm(event) {
    setEditForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  async function saveEdit(event) {
    event.preventDefault();

    try {
      await apiRequest(`/requests/${editingId}`, {
        method: "PATCH",
        body: JSON.stringify(editForm),
      });
      setEditingId("");
      setMessage("Your request was updated.");
      await loadRequests(page);
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  async function deleteRequest(request) {
    const confirmed = window.confirm(
      `Delete your pending request for ${request.equipmentId?.name || "this equipment"}?`
    );

    if (!confirmed) return;

    try {
      await apiRequest(`/requests/${request._id}`, {
        method: "DELETE",
      });
      setMessage("Your request was deleted.");
      setEditingId("");
      await loadRequests(page);
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  return (
    <section className="section page-section">
      <div className="dashboard-header">
        <div>
          <img
            className="branding-logo dashboard-brand"
            src="/tech-it-go-logo.png"
            alt="Tech It & Go!"
          />
          <p className="eyebrow">My Dashboard</p>
          <h1>{user?.name}'s Borrowing Requests</h1>
          <p>
            Review the technology you requested. Pending requests can be edited
            or deleted before staff approval.
          </p>
        </div>

        <Link className="button primary" to="/equipment">
          Browse Equipment
        </Link>
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span>Pending on this page</span>
          <strong>{counts.pending}</strong>
          <p>Requests waiting for review</p>
        </article>

        <article className="dashboard-card">
          <span>Approved on this page</span>
          <strong>{counts.approved}</strong>
          <p>Approved borrowing requests</p>
        </article>

        <article className="dashboard-card">
          <span>Total</span>
          <strong>{pagination.total}</strong>
          <p>All requests connected to your account</p>
        </article>
      </div>

      {message && <p className="form-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <p className="dashboard-loading">Loading your requests...</p>
      ) : requests.length === 0 ? (
        <div className="empty-state dashboard-empty">
          <h2>No saved requests yet.</h2>
          <p>Choose something from the catalog and submit your first request.</p>
          <Link to="/equipment">Find something to borrow →</Link>
        </div>
      ) : (
        <>
          <div className="request-list">
            {requests.map((request) => (
              <article className="request-card" key={request._id}>
                <div className="request-card-heading">
                  <div>
                    <span className={`status-pill status-${request.status}`}>
                      {request.status}
                    </span>
                    <h2>{request.equipmentId?.name || "Equipment"}</h2>
                  </div>
                  <p className="request-dates">
                    {formatDate(request.checkoutDate)} → {formatDate(request.returnDate)}
                  </p>
                </div>

                {editingId === request._id ? (
                  <form className="edit-request-form" onSubmit={saveEdit}>
                    <div className="form-row">
                      <label>
                        Checkout Date
                        <input
                          type="date"
                          name="checkoutDate"
                          value={editForm.checkoutDate}
                          onChange={updateEditForm}
                          required
                        />
                      </label>

                      <label>
                        Return Date
                        <input
                          type="date"
                          name="returnDate"
                          value={editForm.returnDate}
                          onChange={updateEditForm}
                          required
                        />
                      </label>
                    </div>

                    <label>
                      Purpose
                      <textarea
                        name="purpose"
                        rows="4"
                        value={editForm.purpose}
                        onChange={updateEditForm}
                        required
                      />
                    </label>

                    <div className="button-row">
                      <button className="button primary" type="submit">
                        Save Changes
                      </button>
                      <button
                        className="button secondary"
                        type="button"
                        onClick={() => setEditingId("")}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <p><strong>Purpose:</strong> {request.purpose}</p>

                    {request.status === "pending" && (
                      <div className="request-actions">
                        <button
                          className="button secondary"
                          type="button"
                          onClick={() => startEdit(request)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-button danger"
                          type="button"
                          onClick={() => deleteRequest(request)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </>
                )}
              </article>
            ))}
          </div>

          <div className="pagination">
            <button
              className="button secondary"
              type="button"
              disabled={pagination.page <= 1}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
            >
              Previous
            </button>

            <span>
              Page {pagination.page} of {pagination.totalPages}
            </span>

            <button
              className="button secondary"
              type="button"
              disabled={pagination.page >= pagination.totalPages}
              onClick={() => setPage((current) => current + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Dashboard;
