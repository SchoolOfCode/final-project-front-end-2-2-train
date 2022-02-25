import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Map from "./components/Map/index.js";
import { Auth0Provider } from "@auth0/auth0-react";
import Landing from "../src/components/App/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
   <React.StrictMode>
      <Auth0Provider
         domain="dev-zstf-6ko.us.auth0.com"
         clientId="u1uyOmpEhNMThAh66lmghT1xqnKv6hgT"
         redirectUri={window.location.origin}>
         <Router>
            <Routes>
               <Route path="/" element={<Landing />}></Route>
            </Routes>
            <div className="map-container">
               <Map className="map" />
            </div>
            <Routes>
               <Route path="/app" element={<App />}></Route>
            </Routes>
         </Router>
      </Auth0Provider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
