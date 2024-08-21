import { useNavigate } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Hero from "./components/ui/hero";

function App() {
  const navigate = useNavigate();
  return (
    <>
      {/* hero section */}
      <Hero />
    </>
  );
}

export default App;
