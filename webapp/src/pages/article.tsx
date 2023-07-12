import ArticleBody from "../components/ArticleBody";
import { Layout } from "../components/Layout";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";

const GET_ARTICLE_QUERY = gql(`
  query GetArticle($articleId: Float!) {
    article(id: $articleId) {
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

export const Article = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_ARTICLE_QUERY, {
    variables: {
      articleId: Number(id),
    },
  });
  return (
    <Layout isLoading={loading}>
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ mt: 3 }}>
          {data && <ArticleBody post={data.article} />}
        </Grid>
      </Container>
    </Layout>
  );
};
