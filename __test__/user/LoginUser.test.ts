import LoginUser from "../../src/application/usercases/user/LoginUser";
import UserInMemory from "../../src/infra/repositories/in-memory/user/UserInMemory";

test("should create a user", async () => {
  const create = new LoginUser(UserInMemory);
  const input = {
    name: "John",
    password: "123",
  };
  const data = await create.execute(input);
  expect(data).not.toBeNull();
  expect(data?.id).not.toBeUndefined();
  expect(data?.email).toEqual("john@email.com");
  expect(data?.token).not.toEqual("");
});
