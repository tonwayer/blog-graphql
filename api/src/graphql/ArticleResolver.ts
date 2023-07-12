import { Article } from "../entity/Article";
import { Resolver, Query, Arg, Mutation } from "type-graphql";

@Resolver()
export class ArticleResolver {
  @Query(() => [Article])
  async articles() {
    try {
      const articles = await Article.find();
      return articles;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch articles.");
    }
  }

  @Query((articleId) => Article)
  async article (@Arg("id") id: number) {
    try {
      const article = await Article.findOne({ where: { id } });
      if (!article) throw new Error("Article not found");

      return article;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch articles.");
    }
  }

  @Mutation(() => Article)
  async increaseNumberOfViews(@Arg("id") id: number) {
    try {
      const article = await Article.findOne({ where: { id } });
      if (!article) throw new Error("Article not found");

      article.numberOfViews  = article.numberOfViews + 1;
      await article.save();
      return article;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch articles.");
    }
  }
}
