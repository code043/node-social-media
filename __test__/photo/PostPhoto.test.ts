test("should create a photo with token", async () => {
  //
  const create = new CreatePhoto(UserInMemory);
  const input = {
    name: "John",
    email: "john1@email.com",
    password: "123",
  };
  const data = await create.execute(input);
  expect(data).not.toBeNull();
  expect(data?.id).not.toBeUndefined();
});
