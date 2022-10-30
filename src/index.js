import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import BookNow from "./BookNow";
import Tours from "./Tours";
import Faq from "./Faq";
import Admin from "./Admin";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

render(
  <BrowserRouter>
    <App></App>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/book-now" element={<BookNow />}></Route>
      <Route path="/tours" element={<Tours />}></Route>
      <Route path="/faq" element={<Faq />}></Route>      
      <Route path="/admin" element={<Admin />}></Route>
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
