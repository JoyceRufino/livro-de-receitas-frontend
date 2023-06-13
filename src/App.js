import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import NewRecipe from "./pages/NewRecipe";
import CompleteRecipe from "./pages/CompleteRecipe";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<NewRecipe />} />
          <Route path="/complete" element={<CompleteRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
