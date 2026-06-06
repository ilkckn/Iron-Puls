import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Programs from "./pages/Programs/Programs";

const ComponentName = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default ComponentName;
