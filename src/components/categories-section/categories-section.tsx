import './categories-section.css'

function CategoriesSection() {
     return (
    <section className="categories">
      <h2>Unlimited access to 100+ instructors.</h2>
      <nav className="category-nav">
        <ul>
          <li><a href="#">All categories</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Writing</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Food</a></li>
        </ul>
      </nav>
      <div className="category-cards">
        <div className="category-card">Sales Marketing</div>
        <div className="category-card">Data analytics</div>
        <div className="category-card">Design art</div>
        <div className="category-card">Copywriting Pro</div>
      </div>
    </section>
)}
 
 

export default CategoriesSection;
