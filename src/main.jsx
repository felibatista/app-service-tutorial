import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./pages/layout";
import About from "./pages/about";

import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
