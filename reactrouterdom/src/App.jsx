import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Footer from "./Layout/Footer";
import Collecition from "./Pages/Collecition";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/collecition" element={<Collecition />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
