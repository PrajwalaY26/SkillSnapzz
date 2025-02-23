import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Ensure the root element exists before rendering
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found! Make sure you have a div with id='root' in your HTML.");
}
