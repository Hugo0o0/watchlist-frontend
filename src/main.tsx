import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.tsx";
import { ErrorBoundary } from "react-error-boundary";
import InvalidTokenFallback from "./components/ErrorBoundaries/InvalidTokenFallback/InvalidTokenFallback.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={InvalidTokenFallback}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
