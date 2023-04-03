import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./models/create-user.input";
import { UpdateUserInput } from "./models/update-user.input";
import { User } from "./models/user.model";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
	
	constructor(
		private readonly userService: UserService
	) {}

	@Query(() => [User])
	findUsers() {
		return this.userService.find();
	}

	@Mutation(() => User)
	createUser(
		@Args('input') input: CreateUserInput
	) {
		return this.userService.create(input);
	}

	@Mutation(() => User)
	updateUser(
		@Args('input') input: UpdateUserInput
	) {
		return this.userService.update(input);
	}
}