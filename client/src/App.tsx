import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import AboutMe from "./components/AboutMe/AboutMe";
import { BurgerProvider } from "./contexts/BurgerContext";

function App() {
  return (
    <>
      <BurgerProvider>
        <Navigation />
        <Introduction />
      </BurgerProvider>
      <AboutMe />
    </>
  );
}

export default App;
