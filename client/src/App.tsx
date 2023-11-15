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
import AdminDashboard from "./components/Admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

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
                  <AdminDashboard />
                </ProtectedRoute>
              )} />
            </Routes >
            <Footer />
          </BurgerProvider>
        </JobsProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
}

export default App;
