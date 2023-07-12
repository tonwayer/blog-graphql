import "reflect-metadata";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ArticleResolver } from "./graphql/ArticleResolver";
import { createConnection } from "typeorm";
import { Article } from "./entity/Article";

const setupServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  app.get("/items", async (req, res) => {
    const articles = await Article.find();
    res.status(200).send(articles);
  });

  const apolloServer: ApolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ArticleResolver],
    }),
    introspection: true,
    context: ({ req, res }) => ({ req, res }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log(`🚀 Server ready at ${4000}${apolloServer.graphqlPath}`);
  });
};

createConnection()
  .then(async (connection) => {
    setupServer();
  })
  .catch((error) => console.log(error));
