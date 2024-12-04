import React from "react";
import { hydrateRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// Client-side rendering with hydration
hydrateRoot(
  document.getElementById("root"),
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
