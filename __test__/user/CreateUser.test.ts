import CreateUser from "../../src/application/usercases/user/LoginUser";
import UserInMemory from "../../src/infra/repositories/in-memory/user/UserInMemory";
test("should create a user", async () => {
  const create = new CreateUser(UserInMemory);
  const input = {
    name: "John",
    email: "john1@email.com",
    password: "123",
  };
  const data = await create.execute(input);
  expect(data).not.toBeNull();
  expect(data?.id).not.toBeUndefined();
});
