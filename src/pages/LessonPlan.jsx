import { Link, useParams } from "react-router-dom";
import { lessons } from "../data/equipment";

function LessonPlan() {
  const { id } = useParams();
  const lesson = lessons[id];

  if (!lesson) {
    return (
      <section className="section page-section">
        <div className="empty-state">
          <h1>Lesson plan not found.</h1>
          <Link to="/equipment">Browse equipment</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section narrow-section">
      <Link className="back-link" to="/equipment">← Back to Catalog</Link>

      <article className="lesson-card">
        <p className="eyebrow">Lesson Plan</p>
        <h1>{lesson.title}</h1>

        <h2>Learning Objective</h2>
        <p>{lesson.objective}</p>

        <h2>Materials</h2>
        <ul className="simple-list">
          {lesson.materials.map((material) => (
            <li key={material}>{material}</li>
          ))}
        </ul>

        <h2>Steps</h2>
        <ol className="step-list">
          {lesson.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>
    </section>
  );
}

export default LessonPlan;
