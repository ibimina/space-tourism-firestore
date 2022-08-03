import "./App.css";

//import routes and route to handle naviagtion
import { Routes, Route } from "react-router-dom";

//import webpage for navigation
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
