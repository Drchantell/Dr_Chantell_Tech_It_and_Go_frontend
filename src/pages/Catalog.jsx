import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { equipment as demoEquipment } from "../data/equipment";
import { apiRequest } from "../services/api";
import { getEquipmentIcon } from "../utils/equipmentDisplay";

function Catalog() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [offlineDemo, setOfflineDemo] = useState(false);

  useEffect(() => {
    async function loadEquipment() {
      try {
        const data = await apiRequest("/equipment");
        setItems(data.equipment);
        setOfflineDemo(false);
      } catch {
        setItems(
          demoEquipment.map((item) => ({
            ...item,
            _id: item.id,
          }))
        );
        setOfflineDemo(true);
      } finally {
        setLoading(false);
      }
    }

    loadEquipment();
  }, []);

  const categories = useMemo(
    () => ["All", ...new Set(items.map((item) => item.category))],
    [items]
  );

  const filteredEquipment = useMemo(() => {
    return items.filter((item) => {
      const searchText = search.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [items, search, category]);

  return (
    <section className="section page-section">
      <div className="section-heading">
        <p className="eyebrow">Technology Catalog</p>
        <h1>Find the right tool for your next project.</h1>
        <p>
          Search the collection and explore equipment for coding, robotics,
          fabrication, entrepreneurship, and more.
        </p>
      </div>

      {offlineDemo && (
        <p className="info-message">
          Showing built-in sample equipment because the backend is not connected.
        </p>
      )}

      <div className="filter-bar">
        <label>
          Search
          <input
            type="search"
            placeholder="Search equipment..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <label>
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      {loading ? (
        <p>Loading equipment...</p>
      ) : (
        <>
          <p className="result-count">
            {filteredEquipment.length} item
            {filteredEquipment.length === 1 ? "" : "s"} found
          </p>

          <div className="card-grid">
            {filteredEquipment.map((item) => (
              <article className="equipment-card" key={item._id}>
                <div className="equipment-icon" aria-hidden="true">
                  {item.emoji || getEquipmentIcon(item.category)}
                </div>
                <span className="tag">{item.category}</span>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p><strong>Available:</strong> {item.quantityAvailable}</p>
                {item.onSiteOnly && (
                  <span className="notice-pill">On-site use only</span>
                )}
                <Link to={`/equipment/${item._id}`}>View details →</Link>
              </article>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="empty-state">
              <h2>No equipment found.</h2>
              <p>Try another search word or category.</p>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Catalog;
