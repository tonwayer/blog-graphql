import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import { useCheckout } from "../hooks/useCheckout";
import { ArticleCard } from "../components/ArticleCard";
import { Grid, Typography, Container, Box } from "@mui/material";
import { toast } from "../utils/toast";

export const Articles = () => {
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
      try {
        setIsLoading(true);
        await getItems();
        toast.success("Successfully purchased");
      } catch (error) {
        let message = "unknown error";
        if (error instanceof Error) message = error.message;
        toast.error(message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Layout isLoading={isLoading}>
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
            <ArticleCard
              item={item}
              key={item.id}
              onBuy={() => handleBuyItem(item.id)}
            />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};
