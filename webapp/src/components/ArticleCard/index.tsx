import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Article } from "../../__generated__/graphql";
import { Link as RouterLink } from "react-router-dom";

interface IArticleCard {
  article: Article;
}

export const ArticleCard = ({ article }: IArticleCard) => {
  const handleClick = () => {
    //TODO Add mutation
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="div"
          image={article.thumbnail}
          sx={{
            // 16:9
            pt: "56.25%",
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography>{article.description} </Typography>
        </CardContent>
        <CardActions>
          <Link
            component={RouterLink}
            to={`/articles/${article.id}`}
            onClick={handleClick}
          >
            View
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
