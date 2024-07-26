
import './style.css';
import Navbar from "../../components/navbar/navbar"
import Footer from '../../components/footer/footer';
import HeroSection from '../../components/hero-section/hero-section';
import SkillsSection from '../../components/skills-section/skills-section';
import TestimonialsSection from '../../components/testimonial-section/testimonial-section';

export default function IndexPage() {
  return (
    <div>
    <Navbar/> 
    <HeroSection/>
   <SkillsSection/>
   <TestimonialsSection/>
     <Footer/>
  

    </div>
  )
}