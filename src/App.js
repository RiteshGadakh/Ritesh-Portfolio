import AboutSection from "./components/About/about";
import Experience from "./components/Experience/experience";
import Footer from "./components/Footer/footer";
import FormDetails from "./components/Form/form";
import ContactSection from "./components/Navbar/navbar1";
import Navbar from "./components/Navbar/navbar2";
import ProfileSection from "./components/Profile/profile";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div >
      <ContactSection/>
      <Navbar/>
      <ProfileSection/>
      <AboutSection/>
      <Experience/>
      <Projects/>
      <FormDetails/>
      <Footer/>
    </div>
  );
}

export default App;
