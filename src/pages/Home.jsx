import "../style.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <header className="navbar">
        <h2 className="logo">React SPA</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <section className="hero">
        <h1>Welcome to Our Modern SPA</h1>
        <p>This website uses React Router, Context API & protected routes.</p>
        <Link to="/login" className="btn">Get Started</Link>
      </section>
    </div>
  );
}
