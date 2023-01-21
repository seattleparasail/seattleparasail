import React, { createContext, useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar";
import Home from "./Home";
import BookNow from "./BookNow";
import Tours from "./Tours";
import Faq from "./Faq";
import Footer from "./Footer"
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { Global } from '@emotion/react'
import GlobalStyles from './StylesAndThemes/GlobalStyles'
import { theme } from './StylesAndThemes/Themes'
window.location.href = `http://www.seattleparasailing.com/`

Amplify.configure(config);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const defaultContext = {
  themeChoice: 'SuperSonics'
}

export const AppContext = createContext(defaultContext);

const App = () => {

  // useLayoutEffect(() => 
  // )

  const [themeChoice, updateThemeChoice] = useState(defaultContext.themeChoice)

  return (
    <AppContext.Provider value={{ currentTheme: theme[themeChoice], updateThemeChoice }}>
      <Global styles={GlobalStyles} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book-now" element={<BookNow />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
      </Routes>
      <Footer />
    </AppContext.Provider>
  )
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
