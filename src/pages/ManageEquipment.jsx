import { useEffect, useState } from "react";
import { apiRequest } from "../services/api";
import { getEquipmentIcon } from "../utils/equipmentDisplay";

const emptyForm = {
  name: "",
  category: "3D Printing",
  description: "",
  quantityAvailable: 1,
  skillLevel: "Beginner",
  safetyNotes: "",
  onSiteOnly: false,
};

const categories = [
  "3D Printing",
  "Robotics",
  "Computers",
  "Coding",
  "Digital Fabrication",
  "Entrepreneurship",
  "Emerging Technology",
];

function ManageEquipment() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadEquipment() {
    try {
      setLoading(true);
      const data = await apiRequest("/equipment");
      setItems(data.equipment);
      setError("");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEquipment();
  }, []);

  function updateForm(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function startEdit(item) {
    setEditingId(item._id);
    setForm({
      name: item.name,
      category: item.category,
      description: item.description,
      quantityAvailable: item.quantityAvailable,
      skillLevel: item.skillLevel,
      safetyNotes: item.safetyNotes || "",
      onSiteOnly: Boolean(item.onSiteOnly),
    });
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setEditingId("");
    setForm(emptyForm);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    const payload = {
      ...form,
      quantityAvailable: Number(form.quantityAvailable),
    };

    try {
      if (editingId) {
        await apiRequest(`/equipment/${editingId}`, {
          method: "PATCH",
          body: JSON.stringify(payload),
        });
        setMessage("Equipment updated successfully.");
      } else {
        await apiRequest("/equipment", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        setMessage("Equipment added successfully.");
      }

      resetForm();
      await loadEquipment();
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  async function handleDelete(item) {
    const confirmed = window.confirm(
      `Remove ${item.name}? Equipment with lending history will be archived instead of erased.`
    );

    if (!confirmed) {
      return;
    }

    try {
      await apiRequest(`/equipment/${item._id}`, { method: "DELETE" });
      setMessage("Equipment removed from the active catalog.");
      await loadEquipment();
    } catch (requestError) {
      setError(requestError.message);
    }
  }

  return (
    <section className="section page-section">
      <div className="section-heading">
        <img
          className="branding-logo dashboard-brand"
          src="/tech-it-go-logo.png"
          alt="Tech It & Go!"
        />
        <p className="eyebrow">Staff Area</p>
        <h1>Manage Equipment</h1>
        <p>Add new resources or update the technology already in the catalog.</p>
      </div>

      <div className="management-layout">
        <div className="form-card">
          <h2>{editingId ? "Edit Equipment" : "Add Equipment"}</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Equipment Name
              <input name="name" value={form.name} onChange={updateForm} required />
            </label>

            <label>
              Category
              <select name="category" value={form.category} onChange={updateForm}>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>

            <label>
              Description
              <textarea
                name="description"
                rows="4"
                value={form.description}
                onChange={updateForm}
                required
              />
            </label>

            <div className="form-row">
              <label>
                Quantity Available
                <input
                  type="number"
                  min="0"
                  step="1"
                  name="quantityAvailable"
                  value={form.quantityAvailable}
                  onChange={updateForm}
                  required
                />
              </label>

              <label>
                Skill Level
                <select name="skillLevel" value={form.skillLevel} onChange={updateForm}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>All Levels</option>
                </select>
              </label>
            </div>

            <label>
              Safety Notes
              <textarea
                name="safetyNotes"
                rows="3"
                value={form.safetyNotes}
                onChange={updateForm}
              />
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="onSiteOnly"
                checked={form.onSiteOnly}
                onChange={updateForm}
              />
              On-site use only
            </label>

            <div className="button-row">
              <button className="button primary" type="submit">
                {editingId ? "Save Changes" : "Add Equipment"}
              </button>

              {editingId && (
                <button className="button secondary" type="button" onClick={resetForm}>
                  Cancel
                </button>
              )}
            </div>
          </form>

          {message && <p className="form-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>

        <div>
          <h2>Current Catalog</h2>

          {loading ? (
            <p>Loading equipment...</p>
          ) : (
            <div className="manage-list">
              {items.map((item) => (
                <article className="manage-item" key={item._id}>
                  <div className="manage-icon" aria-hidden="true">
                    {getEquipmentIcon(item.category)}
                  </div>
                  <div>
                    <span className="tag">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>Available: {item.quantityAvailable}</p>
                    {item.onSiteOnly && <span className="notice-pill">On-site only</span>}
                  </div>
                  <div className="manage-actions">
                    <button className="button secondary" type="button" onClick={() => startEdit(item)}>
                      Edit
                    </button>
                    <button className="text-button danger" type="button" onClick={() => handleDelete(item)}>
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ManageEquipment;
