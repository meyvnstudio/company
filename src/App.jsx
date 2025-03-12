import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import ScrollProgress from "./components/Scrollbar";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Academy from "./pages/Academy";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Articles from "./pages/Articles";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Works from "./pages/Works";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <ScrollProgress />

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Homepage />} />
            {/* <Route path="academy" element={<Academy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resources" element={<Resources />} />
            <Route path="articles" element={<Articles />} />
            <Route path="services" element={<Services />} />
            <Route path="shop" element={<Shop />} />
            <Route path="portfolio" element={<Works />} /> */}
            <Route path="*" element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
