import jwt from "jsonwebtoken";
import UserService from "../user/UserService";
import UserInMemory from "../../../infra/repositories/in-memory/user/UserInMemory";

export class Token {
  generateToken(id?: number) {
    if (!id) {
      return "-1";
    } else {
      return jwt.sign({ user: id }, "secret", {
        expiresIn: "1d",
      });
    }
  }
  async validate(token: string): Promise<boolean | null> {
    const user = new UserService(UserInMemory);
    if (!token) {
      return null;
    } else {
      const data = jwt.verify(token, "secret") as string;
      if (data) {
        const id = JSON.parse(atob(token.split(".")[1]));
        return id.user === (await user.findUser(id.user)) ? true : null;
      } else {
        return null;
      }
    }
  }
}
