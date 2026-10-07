import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { equipment as demoEquipment } from "../data/equipment";
import { apiRequest } from "../services/api";
import { getEquipmentIcon } from "../utils/equipmentDisplay";

function EquipmentDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [lessonId, setLessonId] = useState("");
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadDetails() {
      try {
        const data = await apiRequest(`/equipment/${id}`);

        if (!active) return;

        setItem(data.equipment);
        setDemoMode(false);

        try {
          const lessonData = await apiRequest(`/lessons?equipmentId=${id}`);
          if (active && lessonData.lessons.length > 0) {
            setLessonId(lessonData.lessons[0]._id);
          }
        } catch {
          if (active) setLessonId("");
        }
      } catch {
        const demoItem = demoEquipment.find(
          (equipmentItem) => equipmentItem.id === id
        );

        if (active && demoItem) {
          setItem({ ...demoItem, _id: demoItem.id });
          setLessonId(demoItem.lessonId);
          setDemoMode(true);
        } else if (active) {
          setError("Equipment was not found.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadDetails();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <section className="section page-section">
        <p>Loading equipment...</p>
      </section>
    );
  }

  if (!item) {
    return (
      <section className="section page-section">
        <div className="empty-state">
          <h1>Equipment not found.</h1>
          <p>{error}</p>
          <Link className="button primary" to="/equipment">Back to Catalog</Link>
        </div>
      </section>
    );
  }

  const canRequest =
    !demoMode && !item.onSiteOnly && item.quantityAvailable > 0;

  return (
    <section className="section page-section">
      <Link className="back-link" to="/equipment">← Back to Catalog</Link>

      {demoMode && (
        <p className="info-message">
          This is sample catalog data. Connect the backend to submit a borrowing request.
        </p>
      )}

      <div className="detail-layout">
        <div className="detail-visual">
          <div className="large-equipment-icon" aria-hidden="true">
            {item.emoji || getEquipmentIcon(item.category)}
          </div>
          <span className="tag">{item.category}</span>
        </div>

        <div className="detail-copy">
          <p className="eyebrow">{item.skillLevel}</p>
          <h1>{item.name}</h1>
          <p className="lead">{item.description}</p>

          <div className="info-list">
            <p><strong>Quantity available:</strong> {item.quantityAvailable}</p>
            <p><strong>Skill level:</strong> {item.skillLevel}</p>
            <p><strong>Safety:</strong> {item.safetyNotes || "Follow staff instructions."}</p>
            <p>
              <strong>Use:</strong>{" "}
              {item.onSiteOnly
                ? "This equipment must be used on site."
                : "This item may be requested for borrowing."}
            </p>
          </div>

          <div className="button-row">
            {canRequest && (
              <Link className="button primary" to={`/equipment/${item._id}/request`}>
                Request This Item
              </Link>
            )}

            {!item.onSiteOnly && item.quantityAvailable < 1 && (
              <span className="notice-pill">Currently unavailable</span>
            )}

            {lessonId && (
              <Link className="button secondary" to={`/lessons/${lessonId}`}>
                View Lesson Plan
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipmentDetails;
