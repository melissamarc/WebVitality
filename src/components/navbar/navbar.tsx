import { Link } from "react-router-dom"
import './navbar.css'

function Navbar() {
  return (
    
      <div>
      
      <div>
        <ul>
          <li><Link to="/sign-up">Sign Up</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Navbar
