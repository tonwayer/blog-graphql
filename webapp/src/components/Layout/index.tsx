import React, { useMemo } from "react";
import { Navbar } from "../Navbar";
import { SnackbarProvider } from "notistack";
import { darkTheme, lightTheme } from "../../themes";
import { useThemeMode } from "../../contexts/ColorModeContext";
import { ThemeProvider } from "@emotion/react";
import { LoadingBackdrop } from "../LoadingBackdrop";

interface ILayout {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Layout = ({ children, isLoading }: ILayout) => {
  const { darkMode } = useThemeMode();
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>
        {children}
      </main>
      {
        isLoading !== undefined && <LoadingBackdrop open={isLoading} />
      }
      <SnackbarProvider />
    </ThemeProvider>
  );
};
