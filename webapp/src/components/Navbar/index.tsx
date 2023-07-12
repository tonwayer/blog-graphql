import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { useThemeMode } from "../../contexts/ColorModeContext";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";
import { Link as RouterLink } from "react-router-dom";
import { Book } from "@mui/icons-material";

export const Navbar = () => {
  const { darkMode, toggleColorMode } = useThemeMode();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Book sx={{ mr: 2 }} />
        <Link component={RouterLink} to="/" sx={{ color: "white" }}>
          Blog
        </Link>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => toggleColorMode()}
          color="inherit"
        >
          {darkMode ? <DarkIcon /> : <LightIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
