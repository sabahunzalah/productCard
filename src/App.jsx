import React from "react";
import { Routes,Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
      
    </>
  );
};

export default App;
