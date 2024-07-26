import { Link } from "react-router-dom";
import './artigos.css'

export default function ArtigosPage() {
  return (
    <>
      <h1>pagina de artigos</h1>
      <p>This is a public page meant to contain a contact form and other related contact details.</p>
      <ul>
        <li><Link to="/">Return to Index</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </>
  );
}