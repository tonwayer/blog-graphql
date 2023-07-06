import { useEffect, useMemo, useState } from "react";
import { useCheckout } from "./hooks/useCheckout";
import { ItemCard } from "./components/ItemCard";
import { Grid, Typography, Container, ThemeProvider, Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { useThemeMode } from "./contexts/ColorModeContext";
import { darkTheme, lightTheme } from "./themes";
import { SnackbarProvider } from "notistack";
import { toast } from "./utils/toast";
import { LoadingBackdrop } from "./components/LoadingBackdrop";

const App = () => {
  const { darkMode } = useThemeMode();
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  const { state, buy, getItems } = useCheckout();
  const { items, balance } = state;
  const [isLoading, setIsLoading] = useState(false);
  const handleBuyItem = async (itemId: number) => {
    try {
      setIsLoading(true);
      await buy(itemId);
      toast.success("Successfully purchased");
    } catch (error) {
      let message = "unknown error";
      if (error instanceof Error) message = error.message;
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await getItems();
      setIsLoading(false);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <LoadingBackdrop open={isLoading} />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to Eric's online shop.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Your balance: ${balance}
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {items?.map((item) => (
              <ItemCard
                item={item}
                key={item.id}
                onBuy={() => handleBuyItem(item.id)}
              />
            ))}
          </Grid>
        </Container>
      </main>
      <SnackbarProvider />
    </ThemeProvider>
  );
};

export default App;
