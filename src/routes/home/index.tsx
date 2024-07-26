
import './style.css';
import Navbar from "../../components/navbar/navbar"
import Footer from '../../components/footer/footer';
import HeroSection from '../../components/index-components/hero-section/hero-section';
import SkillsSection from '../../components/index-components/skills-section/skills-section';
import TestimonialsSection from '../../components/index-components/testimonial-section/testimonial-section';
import CardSection from '../../components/index-components/cards-section/cards-section';
import ImageTextSection from '../../components/index-components/img-text-section/img-text-section';


export default function IndexPage() {
  return (
    <div>
    <Navbar/> 
    <HeroSection/>
    <CardSection/>
   <SkillsSection/>
   <ImageTextSection/>
   <TestimonialsSection/>

     <Footer/>
  

    </div>
  )
}