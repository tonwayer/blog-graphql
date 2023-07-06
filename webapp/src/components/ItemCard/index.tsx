import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { IItem } from "../../interfaces/IItem";

interface IItemCard {
  item: IItem;
  onBuy: () => void;
}

export const ItemCard = ({ item, onBuy }: IItemCard) => {
  const handleBuy = () => {
    onBuy();
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography>Price: {item.price}</Typography>
          <Typography>Inventory: {item.inventory}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleBuy}>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
