import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/style/main.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Catalog } from "./pages/Catalog";
import { ContactForm } from "./components/ContactForm";
import { Product } from "./pages/Product";
import { useEffect, useRef } from "react";
export const App = () => {
  const location = useLocation();
  const contactFormRef = useRef();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <ContactForm ref={contactFormRef} />
      <Footer />
    </>
  );
};
