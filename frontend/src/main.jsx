import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled.js";
import App from "./App.jsx";

const theme = {
  color: {
    primary: "#191e25",
    secondary: "#c5c9cd",
    tertiary: "#2D2D2D",
    accent: "#72777b",
    neutral: "#999ba1",
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
