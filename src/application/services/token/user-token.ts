import jwt from "jsonwebtoken";
import UserService from "../user/UserService";
import UserInMemory from "../../../infra/repositories/in-memory/user/UserInMemory";

export class Token {
  generateToken(id?: number) {
    if (!id) {
      return "-1";
    } else {
      return jwt.sign({ id: id }, "secret", {
        expiresIn: "1d",
      });
    }
  }
  async validate(token: string): Promise<number | null> {
    const userInDatabase = new UserService(UserInMemory);
    if (!token) {
      return null;
    } else {
      const data = jwt.verify(token, "secret") as string;
      if (data) {
        const { id } = JSON.parse(atob(token.split(".")[1]));

        const idDatabase = await userInDatabase.findUser(id);
        return id === idDatabase ? idDatabase : null;
      } else {
        return null;
      }
    }
  }
}
