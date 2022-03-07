import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";
import Landing from "../src/components/App/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
   <React.StrictMode>
      <Auth0Provider
         domain="dev-zstf-6ko.us.auth0.com"
         clientId="u1uyOmpEhNMThAh66lmghT1xqnKv6hgT"
         redirectUri={`http://localhost:3000/app`}>
         <Router>
            <Routes>
               <Route path="/" element={<Landing />}></Route>
            </Routes>
            <Routes>
               <Route path="/app" element={<App />}></Route>
            </Routes>
         </Router>
      </Auth0Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
