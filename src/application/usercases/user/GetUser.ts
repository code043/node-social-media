import { UserRepository } from "../../repositories/user/UserRepository";
import { Token } from "../../services/token/user-token";

export default class GetUser {
  constructor(readonly repository: UserRepository) {}
  async execute(token: string) {
    const userByToken = new Token();
    const data = await userByToken.validate(token);
    if (!data) return null;
    const user = await this.repository.getUserById(data);
    console.log(data);
    return user;
  }
}
