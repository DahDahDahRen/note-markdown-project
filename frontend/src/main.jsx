import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./components/styled/GlobalStyle.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
