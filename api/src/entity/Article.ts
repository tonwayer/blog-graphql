import { Field, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@ObjectType()
@Entity({ name: "article" })
export class Article extends BaseEntity {

  @Field(() => String)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String)
  @Column()
  title: string

  @Field(() => String)
  @Column()
  author: string

  @Field(() => Number)
  @Column({ default: 0 })
  numberOfViews: number

  @Field(() => String)
  @Column({ type: "text" })
  content: string

  @Field(() => String)
  @Column()
  description: string

  @Field(() => String)
  @Column()
  thumbnail: string
}
