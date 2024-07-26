import { Link } from "react-router-dom";
import './about-us.css'

export default function AboutPage() {
  return (
    <>
      <h1>pagina de quem somos</h1>
      <p>This is a public page meant to contain a contact form and other related contact details.</p>
      <ul>
        <li><Link to="/">Return to Index</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </>
  );
}