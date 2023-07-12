import { Layout } from "../components/Layout";
import { ArticleCard } from "../containers/ArticleCard";
import { Grid, Typography, Container, Box } from "@mui/material";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";

const GET_ARTICLES_QUERY = gql(`
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
  const { loading, data } = useQuery(GET_ARTICLES_QUERY);

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
            Welcome to Eric&#39;s blog!
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
