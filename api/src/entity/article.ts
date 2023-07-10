import { Field, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@ObjectType()
@Entity("articles")
export class Article extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title: string

  @Field()
  @Column()
  arthur: string

  @Field()
  @Column({ default: 0 })
  numberOfViews: number

  @Field()
  @Column({ type: "text" })
  content: string

  @Field()
  @Column()
  description: string
}
