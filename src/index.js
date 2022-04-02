import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { AuthProvider } from "./Context/Auth-Context"
import {UserDataProvider} from "./Context/UserData-Context"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserDataProvider>
          <Router />
        </UserDataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
