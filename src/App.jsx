import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { initAnimations } from "./animations";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  useEffect(() => {
    // Initialize animations when the app mounts
    initAnimations();

    // Clean up animations when the component unmounts
    return () => {
      // Any cleanup code for animations if needed
    };
  }, []);

  return (
    <div className="app" data-scroll-container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
