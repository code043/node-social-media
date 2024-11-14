import UserInMemory from "../../src/infra/repositories/in-memory/user/UserInMemory";
import GetUser from "../../src/application/usercases/user/GetUser";
test("should return user by token", async () => {
  const getUser = new GetUser(UserInMemory);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTczMTYyMjU1NSwiZXhwIjoxNzMxNzA4OTU1fQ.c51vA91CO6-dqvY27owAKhwkzjHEVM-gkqK9cbQcoUw";
  const user = await getUser.execute(token);
  expect(user?.id).not.toBeUndefined();
});
