import { Link, useParams } from "react-router-dom";
import { equipment } from "../data/equipment";

function EquipmentDetails() {
  const { id } = useParams();
  const item = equipment.find((equipmentItem) => equipmentItem.id === id);

  if (!item) {
    return (
      <section className="section page-section">
        <div className="empty-state">
          <h1>Equipment not found.</h1>
          <Link className="button primary" to="/equipment">Back to Catalog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section">
      <Link className="back-link" to="/equipment">← Back to Catalog</Link>

      <div className="detail-layout">
        <div className="detail-visual">
          <div className="large-equipment-icon" aria-hidden="true">{item.emoji}</div>
          <span className="tag">{item.category}</span>
        </div>

        <div className="detail-copy">
          <p className="eyebrow">{item.skillLevel}</p>
          <h1>{item.name}</h1>
          <p className="lead">{item.description}</p>

          <div className="info-list">
            <p><strong>Quantity available:</strong> {item.quantityAvailable}</p>
            <p><strong>Skill level:</strong> {item.skillLevel}</p>
            <p><strong>Safety:</strong> {item.safetyNotes}</p>
            <p>
              <strong>Use:</strong>{" "}
              {item.onSiteOnly ? "This equipment must be used on site." : "This item may be requested for borrowing."}
            </p>
          </div>

          <div className="button-row">
            {!item.onSiteOnly && (
              <Link className="button primary" to={`/equipment/${item.id}/request`}>
                Request This Item
              </Link>
            )}
            <Link className="button secondary" to={`/lessons/${item.lessonId}`}>
              View Lesson Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipmentDetails;
