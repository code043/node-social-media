import { UserRepository } from "../../repositories/user/UserRepository";

export default class CreateUser {
  constructor(private repository: UserRepository) {}
  async execute(input: Input): Promise<number | null> {
    const user = await this.repository.createUser(input);
    if (!user) return null;
    return user.id as number;
  }
}

type Input = {
  name: string;
  email: string;
  password: string;
};
