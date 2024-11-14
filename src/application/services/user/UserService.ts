import { UserRepository } from "../../repositories/user/UserRepository";

export default class UserService {
  constructor(private repository: UserRepository) {}
  async findUser(userId: number): Promise<null | number> {
    const user = await this.repository.getUserById(userId);
    if (!user) {
      return null;
    } else {
      return 20;
    }
  }
}
