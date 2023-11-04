import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectsAndWork from "./components/ProjectsAndWork/ProjectsAndWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BurgerProvider } from "./contexts/BurgerContext";
import { JobsProvider } from "./contexts/JobsContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import { Routes, Route } from "react-router-dom";
import JobsDetails from "./components/JobsDetails/JobsDetails";
import ProjectsDetails from "./components/ProjectsDetails/ProjectsDetails";

function App() {
  return (
    <ProjectsProvider>
      <JobsProvider>
        <BurgerProvider>
          <Navigation />
          <Routes>
            <Route path='/' element={
              <>
                <Introduction />
                <AboutMe />
                <ProjectsAndWork />
                <Contact />
              </>
            } />
            <Route path='/projects/:title' element={<ProjectsDetails />} />
            <Route path='/jobs/:company' element={<JobsDetails />} />
          </Routes >
          <Footer />
        </BurgerProvider>
      </JobsProvider>
    </ProjectsProvider>
  );
}

export default App;
