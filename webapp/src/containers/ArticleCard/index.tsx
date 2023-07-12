import {
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
import { gql } from "../../__generated__";
import { useMutation } from "@apollo/client";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface IArticleCardProps {
  article: Article;
}

const INCREASE_NUMBER_OF_VIEWS = gql(`
  mutation IncreaseNumberOfViews($articleId: Float!) {
    increaseNumberOfViews(id: $articleId) {
      id
      title
      author
      numberOfViews
      content
      description
      thumbnail
    }
  }
`);

export const ArticleCard = ({ article }: IArticleCardProps) => {
  const { id } = article;
  const [increaseNumberOfViews] = useMutation(INCREASE_NUMBER_OF_VIEWS, {
    variables: { articleId: Number(id) },
  });
  const handleClick = () => {
    increaseNumberOfViews();
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
          <Typography display="flex">
            <VisibilityIcon />: {article.numberOfViews}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography>{article.description}</Typography>
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
