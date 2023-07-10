import { Article } from "../entity/article";
import { Resolver, Query } from "type-graphql";
import { initialItems } from "../data";


@Resolver()
export class ArticleResolver {
  @Query(returns => [Article], { nullable: true })
  articles() {
    return initialItems
  }
}
