import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import Landing from "../src/components/App/Landing";
import Contact from "../src/components/App/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
   <React.StrictMode>
      <Auth0Provider
         domain="pinit.eu.auth0.com"
         clientId="HfJrCn4gPGhRR6NW1LJx6AMHnn25Oir0"
         redirectUri={`https://pinit-pinit.netlify.app/app`}>
         <Router>
            <Routes>
               <Route path="/" element={<Landing />}></Route>
            </Routes>
            <Routes>
               <Route path="/app" element={<App />}></Route>
            </Routes>
            <Routes>
               <Route path="/contact" element={<Contact />}></Route>
            </Routes>
         </Router>
      </Auth0Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
