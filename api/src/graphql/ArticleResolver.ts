import { Article } from "../entity/Article";
import { Resolver, Query } from "type-graphql";

@Resolver()
export class ArticleResolver {
  @Query((returns) => [Article])
  async articles() {
    try {
      const articles = await Article.find();
      return articles;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch articles.");
    }
  }
}
