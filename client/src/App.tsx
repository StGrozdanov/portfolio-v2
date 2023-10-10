import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import { BurgerProvider } from "./contexts/BurgerContext";

function App() {
  return (
    <BurgerProvider>
      <Navigation />
      <Introduction />
    </BurgerProvider>
  );
}

export default App;
