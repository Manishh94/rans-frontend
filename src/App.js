import Aos from "aos";
import "./App.css";
import Routes from "./routes";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="App">
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
