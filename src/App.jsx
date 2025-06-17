import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Homepage from "./pages/Homepage";
import Servicepage from "./pages/Servicepage";
import CaseStudies from "./pages/Portfolio";
import Errorpage from "./pages/Error";
import ProductsPage from "./pages/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="company/products" element={<ProductsPage />} />
            <Route path="services" element={<Servicepage />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="resources" element={<Servicepage />} />
            <Route path="who-we-are" element={<Servicepage />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
