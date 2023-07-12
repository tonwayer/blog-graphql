import { Layout } from "../components/Layout";
import { ArticleCard } from "../components/ArticleCard";
import { Grid, Typography, Container, Box } from "@mui/material";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";

const ARTICLES_QUERY = gql(`
  query GetArticles {
    articles {
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

export const Articles = () => {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);
  console.log(loading, error, data);

  return (
    <Layout isLoading={loading}>
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
            Welcome to Eric&#39;s blog.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {data?.articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};
