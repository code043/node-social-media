import jwt from "jsonwebtoken";

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
}
