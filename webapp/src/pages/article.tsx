import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { POST } from "../mock/blog-post";
import ArticleBody from "../components/ArticleBody";

export const Article = () => {
  return (
    <Container maxWidth="lg">
      <main>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <ArticleBody title="From the firehose" post={POST} />
        </Grid>
      </main>
    </Container>
  );
};
