import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { equipment } from "../data/equipment";

function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(equipment.map((item) => item.category))];

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

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

      <p className="result-count">
        {filteredEquipment.length} item{filteredEquipment.length === 1 ? "" : "s"} found
      </p>

      <div className="card-grid">
        {filteredEquipment.map((item) => (
          <article className="equipment-card" key={item.id}>
            <div className="equipment-icon" aria-hidden="true">{item.emoji}</div>
            <span className="tag">{item.category}</span>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p><strong>Available:</strong> {item.quantityAvailable}</p>
            {item.onSiteOnly && <span className="notice-pill">On-site use only</span>}
            <Link to={`/equipment/${item.id}`}>View details →</Link>
          </article>
        ))}
      </div>

      {filteredEquipment.length === 0 && (
        <div className="empty-state">
          <h2>No equipment found.</h2>
          <p>Try another search word or category.</p>
        </div>
      )}
    </section>
  );
}

export default Catalog;
