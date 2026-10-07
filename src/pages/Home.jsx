import { Link } from "react-router-dom";
import { equipment } from "../data/equipment";

function Home() {
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
          {equipment.slice(0, 3).map((item) => (
            <article className="equipment-card" key={item.id}>
              <div className="equipment-icon" aria-hidden="true">{item.emoji}</div>
              <span className="tag">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <Link to={`/equipment/${item.id}`}>View details →</Link>
            </article>
          ))}
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
          <span>Submit a borrowing request.</span>
        </div>
      </section>
    </>
  );
}

export default Home;
