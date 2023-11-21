import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Band from "./Pages/Band";
import Concerts from "./Pages/Concerts";
import Contact from "./Pages/Contact";
import Medias from "./Pages/Medias";
import NavBar from "./Components/NavBar/NavBar";
import SetList from "./Pages/SetList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/le-groupe" element={<Band />} />
        <Route path="/set-liste" element={<SetList />} />
        <Route path="/medias" element={<Medias />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
