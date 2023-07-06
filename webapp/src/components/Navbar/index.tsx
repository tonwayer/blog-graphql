import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useThemeMode } from "../../contexts/ColorModeContext";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";

export const Navbar = () => {
  const {darkMode, toggleColorMode} = useThemeMode();

  return (
    <AppBar position="relative">
      <Toolbar>
        <StorefrontIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Online shop
        </Typography>
        <IconButton
        sx={{ ml: 1 }}
        onClick={() => toggleColorMode()}
        color="inherit"
      >
        {darkMode? <DarkIcon /> : <LightIcon />}
      </IconButton>
      </Toolbar>
    </AppBar>
  );
};
