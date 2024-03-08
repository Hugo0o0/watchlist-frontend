import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.tsx";
import { ErrorBoundary } from "react-error-boundary";
import InvalidTokenFallback from "./components/ErrorBoundaries/InvalidTokenFallback/InvalidTokenFallback.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallbackRender={InvalidTokenFallback}>
        <ReactQueryDevtools />
        <AuthProvider>
          <App />
        </AuthProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>
);
