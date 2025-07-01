// src/ThemeProvider.tsx
import { useMemo, useState, createContext, useContext } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

type ThemeContextType = {
  toggleTheme: () => void;
  isLight: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeMode must be used within ThemeProviderWrapper");
  return context;
};

export default function ThemeProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => setIsLight((prev) => !prev);
  const theme = useMemo(() => (isLight ? lightTheme : darkTheme), [isLight]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isLight }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
