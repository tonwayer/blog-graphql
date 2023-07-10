import { CssBaseline } from "@mui/material";
import { ThemeContextProvider } from "./contexts/ColorModeContext";
import Pages from "./pages";

const App = () => {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Pages />
    </ThemeContextProvider>
  );
};

export default App;
