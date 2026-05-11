import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import LoadingScreen from "./components/LoadingScreen";
import LandingPage from "./components/NewLandingPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import NewsEventsPage from "./components/News&EventPage";
import ProductsPage from "./components/ProductsPage";
import ContactPage from "./components/ContactUsPage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // loading screen eka first visit ekedi witharai show wenne
    const alreadyLoaded = sessionStorage.getItem("site-loaded");

    if (!alreadyLoaded) {
      setLoading(true);
    }
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("site-loaded", "true");
    setLoading(false);
  };

  // FIRST LOAD ONLY
  if (loading) {
    return <LoadingScreen onFinish={handleFinish} />;
  }

  // NORMAL APP
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/news-events" element={<NewsEventsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;