import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { equipment as demoEquipment } from "../data/equipment";
import { apiRequest } from "../services/api";
import { getEquipmentIcon } from "../utils/equipmentDisplay";

function Home() {
  const [featured, setFeatured] = useState(
    demoEquipment.slice(0, 3).map((item) => ({ ...item, _id: item.id }))
  );

  useEffect(() => {
    async function loadFeatured() {
      try {
        const data = await apiRequest("/equipment");
        setFeatured(data.equipment.slice(0, 3));
      } catch {
        // The built-in examples keep the landing page useful before local setup.
      }
    }

    loadFeatured();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Technology Lending Library</p>
          <h1>Borrow the tech. Build your next big idea.</h1>
          <p>
            Tech It & Go! helps educators, makerspaces, nonprofits, and learners
            find technology tools and hands-on lesson ideas in one simple place.
          </p>

          <div className="button-row">
            <Link className="button primary" to="/equipment">
              Browse Technology
            </Link>
            <Link className="button secondary" to="/register">
              Create an Account
            </Link>
          </div>
        </div>

        <div className="hero-logo-card">
          <img src="/Tech%26Gologo.svg" alt="Tech It & Go! logo" />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2>Technology for learning and creating</h2>
          <p>
            Start with beginner-friendly tools, then explore more advanced
            fabrication and emerging technology.
          </p>
        </div>

        <div className="card-grid">
          {featured.map((item) => (
            <article className="equipment-card" key={item._id}>
              <div className="equipment-icon" aria-hidden="true">
                {item.emoji || getEquipmentIcon(item.category)}
              </div>
              <span className="tag">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <Link to={`/equipment/${item._id}`}>View details →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section course-tools">
        <div className="section-heading">
          <p className="eyebrow">My Per Scholas Toolkit</p>
          <h2>Tools and concepts I can explain from this course</h2>
          <p>
            I used the first group directly in Tech It & Go!. The second group
            shows additional course concepts I learned and can explain, even
            when I chose a different tool for this MVP.
          </p>
        </div>

        <div className="tool-groups">
          <article className="tool-group">
            <h3>Used directly in this project</h3>
            <p className="tool-note">
              These tools are part of the working app or my development workflow.
            </p>
            <div className="tool-list">
              {[
                "HTML5",
                "CSS3",
                "JavaScript ES6+",
                "React",
                "Vite",
                "React Router",
                "Fetch API",
                "Node.js",
                "Express.js",
                "REST APIs",
                "Middleware",
                "MongoDB Atlas",
                "Mongoose",
                "CRUD",
                "bcrypt",
                "JWT",
                "dotenv",
                "CORS",
                "Git",
                "GitHub",
                "Postman",
                "Supertest",
                "GitHub Actions",
                "Render",
                "Vercel"
              ].map((tool) => (
                <span className="tool-chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </article>

          <article className="tool-group">
            <h3>Additional course concepts I learned</h3>
            <p className="tool-note">
              I did not force these into the MVP when another approach fit the project better.
            </p>
            <div className="tool-list">
              {[
                "TypeScript",
                "DOM",
                "GraphQL",
                "OAuth 2.0",
                "Java / Spring Boot concepts",
                "SQL concepts",
                "NoSQL concepts",
                "Agile workflow",
                "Authentication & Authorization",
                "AI for Software Engineering"
              ].map((tool) => (
                <span className="tool-chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="feature-strip">
        <div>
          <strong>Browse</strong>
          <span>Find technology by category.</span>
        </div>
        <div>
          <strong>Learn</strong>
          <span>Open simple lesson ideas.</span>
        </div>
        <div>
          <strong>Request</strong>
          <span>Submit and manage borrowing requests.</span>
        </div>
      </section>
    </>
  );
}

export default Home;
