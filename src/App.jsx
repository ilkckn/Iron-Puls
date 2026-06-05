import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";

const ComponentName = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default ComponentName;
