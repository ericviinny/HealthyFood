import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import App from "./App";
import Register from "./register";

class Rotas extends Component {
  render() {
      return (
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cadastro" element={<Register />} />
            </Routes>
          </BrowserRouter>
      )
  }
}

export default Rotas;