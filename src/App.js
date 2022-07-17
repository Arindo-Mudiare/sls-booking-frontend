import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formsy from "./pages/Formsy";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Formsy />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
