import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import FamilyDetails from './sections/FamilyDetails'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import LifestyleInterests from './sections/LifestyleInterests'
import PhotoGallery from './sections/PhotoGallery'
import ProfessionalDetails from './sections/ProfessionalDetails'

function App() {
  return (
    <div className="min-h-screen bg-page-gradient text-wedding-muted">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <ProfessionalDetails />
        <FamilyDetails />
        <LifestyleInterests />
        <PhotoGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
