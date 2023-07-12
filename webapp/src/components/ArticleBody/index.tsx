import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Markdown } from "../Markdown";
import { Article } from "../../__generated__/graphql";

interface MainProps {
  post: Article;
}

export default function Main({ post }: MainProps) {
  const { content, title } = post;
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Markdown className="markdown" key={content.substring(0, 40)}>
        {content}
      </Markdown>
    </Grid>
  );
}
