import React from "react";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import Registrasi from "../../Registrasi";

// // style
// import "./style.scss";

// pages
import Dashboard from "../Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="registrasi" element={<Registrasi />} />
      </Routes>
    </div>
  );
}

export default App;
