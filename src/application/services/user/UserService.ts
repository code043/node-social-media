import { UserRepository } from "../../repositories/user/UserRepository";

export default class UserService {
  constructor(private repository: UserRepository) {}
  async findUser(userId: number): Promise<boolean | null> {
    const user = await this.repository.getUserById(userId);
    if (!user) return null;
    return true;
  }
}
