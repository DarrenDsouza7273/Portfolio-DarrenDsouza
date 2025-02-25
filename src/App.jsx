import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume /> }/>
      </Routes>
    </>
  );
}

export default App;
