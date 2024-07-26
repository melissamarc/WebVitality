
import './footer.css';

function Footer(){
return (
    <footer className="footer">
      <div className="footer-nav">
        <ul>
          <li><a href="#">Find passion</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Customer</a></li>
        </ul>
      </div>
      <div className="newsletter">
        <h3>Join our community</h3>
        <div className="newsletter-signup">
          <input type="email" placeholder="Enter your email" />
          <button>Go</button>
        </div>
      </div>
      <div className="social-media">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}
export default Footer;
