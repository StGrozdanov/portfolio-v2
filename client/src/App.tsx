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
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Skills from "./components/Admin/modules/components/Skills/Skills";
import PersonalInfo from "./components/Admin/modules/components/PersonalInfo/PersonalInfo";
import ProjectsAndJobs from "./components/Admin/modules/components/ProjectsAndJobs/ProjectsAndJobs";
import Socials from "./components/Admin/modules/components/Socials/Socials";
import AdminRoot from "./components/Admin/AdminRoot";
import Dashboard from "./components/Admin/modules/components/Dashboard/Dashboard";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <AuthProvider>
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
              <Route path='/login' element={<Login />} />
              <Route path='/admin/dashboard' element={(
                <ProtectedRoute>
                  <AdminRoot>
                    <Dashboard />
                  </AdminRoot>
                </ProtectedRoute>
              )} />
              <Route path='/admin/personal-info' element={(
                <ProtectedRoute>
                  <AdminRoot>
                    <ModalProvider>
                      <PersonalInfo />
                    </ModalProvider>
                  </AdminRoot>
                </ProtectedRoute>
              )} />
              <Route path='/admin/skills' element={(
                <ProtectedRoute>
                  <AdminRoot>
                    <Skills />
                  </AdminRoot>
                </ProtectedRoute>
              )} />
              <Route path='/admin/projects-and-jobs' element={(
                <ProtectedRoute>
                  <AdminRoot>
                    <ProjectsAndJobs />
                  </AdminRoot>
                </ProtectedRoute>
              )} />
              <Route path='/admin/social-media' element={(
                <ProtectedRoute>
                  <AdminRoot>
                    <Socials />
                  </AdminRoot>
                </ProtectedRoute>
              )} />
            </Routes >
            <Footer />
          </BurgerProvider>
        </JobsProvider>
      </ProjectsProvider>
    </AuthProvider >
  );
}

export default App;
