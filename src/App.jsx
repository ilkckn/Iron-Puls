import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";

const ComponentName = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default ComponentName;
