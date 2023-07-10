import "reflect-metadata";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { initialBalance, initialItems, Item } from "./src/data";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ArticleResolver } from "./src/resolver/ArticleResolver";

let store = {
  balance: initialBalance,
  items: initialItems,
};

export const app = express();

const setupServer = async () => {
  app.use(bodyParser.json());
  app.use(cors());
  
  app.get("/items", async (req, res) => {
    res.status(200).send(store);
  });
  
  // app.post("/items/", async (req, res) => {
  //   const itemId = parseInt(req.body.itemId, 10);
  //   const { items, balance } = store;
  //   const selectedItem = items.find((item: Item) => item.id === itemId);
  //   if (!selectedItem) {
  //     return res.status(404).send("You should select a valid item.");
  //   }
  
  //   if (selectedItem.price > balance) {
  //     return res
  //       .status(400)
  //       .send(`You don't have enough balance to buy a ${selectedItem.name}.`);
  //   }
  
  //   if (selectedItem.inventory <= 0) {
  //     return res.status(400).send(`${selectedItem.name} is out of stock.`);
  //   }
  
  //   let newItems;
  //   if (selectedItem.inventory === 1) {
  //     const index = items.map((item) => item.id).indexOf(itemId);
  //     items.push(items.splice(index, 1)[0]);
  //     newItems = [...items];
  //   }
  
  //   newItems = items.map((item) =>
  //     item.id === itemId ? { ...item, inventory: item.inventory - 1 } : item
  //   );
  //   store = {
  //     balance: balance - selectedItem.price,
  //     items: newItems,
  //   };
  //   return res.send(store);
  // });
  // const connectionOptions: ConnectionOptions = await getConnectionOptions('development');

  // await createConnection({});
  const apolloServer: ApolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ArticleResolver],
    }),
    introspection: true,
    context: ({ req, res }) => ({ req, res }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(8000, () => {
    console.log(`🚀 Server ready at 8000${apolloServer.graphqlPath}`);
  });
}

setupServer();
