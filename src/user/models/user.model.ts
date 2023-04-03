import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@ObjectType()
@Schema({
	timestamps: true,
})
export class User {

	@Field()
	_id: string;

	@Field()
	@Prop()
	firstName: string;

	@Field()
	@Prop()
	lastName: string;

	@Field({ nullable: true})
	@Prop()
	age: number;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);