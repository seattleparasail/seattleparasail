import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import BookNow from "./BookNow";
import Tours from "./Tours";
import Faq from "./Faq";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/book-now" element={<BookNow />}></Route>
      <Route path="/tours" element={<Tours />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
    </Routes>
  </BrowserRouter>
);
