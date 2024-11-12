import {
  UserData,
  UserInput,
  UserRepository,
} from "../../../../application/repositories/user/UserRepository";
import User from "../../../../domain/entities/User";

class UserInMemory implements UserRepository {
  private users: User[] = [];
  constructor() {
    this.users = [
      {
        id: 20,
        name: "John",
        email: "john@email.com",
        password: "123",
      },
    ];
  }
  async login(input: UserInput): Promise<UserData | undefined> {
    const user = this.users.find((user) => user.name === input.name);
    if (!user) return;
    return user;
  }
  async createUser(input: User): Promise<UserData | undefined> {
    const newUser = {
      id: this.users.length + 20,
      ...input,
    };
    if (this.users.find((user) => user.name === newUser.name)) {
      return;
    }
    this.users.push(newUser);
    const user = this.users.find((user) => user.id === newUser.id);
    return user;
  }
}
export default new UserInMemory();
