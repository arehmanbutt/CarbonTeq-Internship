import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";

// createRoot(document.getElementById("root")!).render(<App />);
import ThemeProviderWrapper from "./ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProviderWrapper>
    <App />
  </ThemeProviderWrapper>
);
