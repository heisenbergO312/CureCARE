import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app-parent">
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </div>
  </React.StrictMode>
);

export const backendLink = `http://localhost:4000`;
