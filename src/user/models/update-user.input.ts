import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserInput {
	
	@Field()
	_id: string;

	@Field({ nullable: true})
	firstName?: string;

	@Field({ nullable: true})
	lastName?: string;

	@Field({ nullable: true})
	age?: number;

}