import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectsAndWork from "./components/ProjectsAndWork/ProjectsAndWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BurgerProvider } from "./contexts/BurgerContext";

function App() {
  return (
    <>
      <BurgerProvider>
        <Navigation />
        <Introduction />
      </BurgerProvider>
      <AboutMe />
      <ProjectsAndWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
