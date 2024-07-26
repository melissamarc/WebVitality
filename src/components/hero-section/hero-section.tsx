import './hero-section.css'

function HeroSection() {
  return (

    <section className="hero">
      <div className="hero-content">
        <h1>Watch. Learn. Grow.</h1>
        <div className="search-bar">
          <input type="text" placeholder="Find your passion" />
          <button>Go</button>
        </div>
      </div>
      <div className="courses">
        <div className="course-card">Writing Course</div>
        <div className="course-card">Writing</div>
        <div className="course-card">Business</div>
      </div>
    </section>
  )
}

export default HeroSection;
