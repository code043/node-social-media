import User from "../../../domain/entities/User";

export type UserData = Omit<User, "password">;
export type UserInput = Omit<UserData, "email">;
export interface UserRepository {
  createUser(input: UserInput): Promise<UserData | undefined>;
  login(input: UserInput): Promise<UserData | undefined>;
}
