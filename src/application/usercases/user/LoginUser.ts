import { UserRepository } from "../../repositories/user/UserRepository";
import { Token } from "../../services/token/user-token";

export default class LoginUser {
  constructor(private repository: UserRepository) {}
  async execute(input: Input): Promise<Output | null> {
    const user = await this.repository.login(input);
    if (!user) return null;
    const token = new Token().generateToken(user.id);
    return {
      id: user.id as number,
      name: user.name,
      email: user.email,
      token: token,
    };
  }
}

type Input = {
  name: string;
  password: string;
};
type Output = {
  id: number;
  name: string;
  email: string;
  token: string;
};
