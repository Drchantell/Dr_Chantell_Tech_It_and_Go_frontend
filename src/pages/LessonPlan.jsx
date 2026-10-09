import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { lessons as demoLessons } from "../data/equipment";
import { apiRequest } from "../services/api";

function LessonPlan() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadLesson() {
      try {
        const data = await apiRequest(`/lessons/${id}`);
        if (active) setLesson(data.lesson);
      } catch {
        if (active && demoLessons[id]) {
          setLesson(demoLessons[id]);
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadLesson();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <section className="section page-section">
        <p>Loading lesson plan...</p>
      </section>
    );
  }

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

  const objectives = lesson.objectives || [lesson.objective].filter(Boolean);

  return (
    <section className="section page-section narrow-section">
      <Link className="back-link" to="/equipment">← Back to Catalog</Link>

      <article className="lesson-card">
        <img
          className="branding-logo lesson-logo"
          src="/tech-it-go-logo.png"
          alt="Tech It & Go!"
        />
        <p className="eyebrow">Lesson Plan</p>
        <h1>{lesson.title}</h1>

        <h2>Learning Objective</h2>
        <ul className="simple-list">
          {objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>

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
