import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'
import './navbar.css'

function Navbar() {
  return (
    
      <div className="navbar">
      <div className="logo">
        <img src={logo} />
        <span> Vitality Vision </span>
      </div>
      
      <nav className="nav">
        <ul>
          <li><Link to="/contact"> Contato </Link></li>
          <li><Link to="/help">Ajuda</Link></li>
        <li><Link to="/artigos">Artigos</Link></li>
            <li><Link to="/about-us">Quem Somos</Link></li>
         
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/sign-up" className="btn">Sign Up</Link>
        <Link to="/sign-in" className="btn">Sign In</Link>
      </div>

</div>
    
  )
}

export default Navbar
