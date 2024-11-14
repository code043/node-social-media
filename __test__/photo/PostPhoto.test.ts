import CreatePhoto from "../../src/application/usercases/photo/CreatePhoto";
import PhotoInMemory from "../../src/infra/repositories/in-memory/photo/PhotoInMemory";
test("should create a photo with token", async () => {
  //
  const create = new CreatePhoto(PhotoInMemory);
  const input = {
    author: "",
    title: "learn",
    peso: 10,
    idade: 10,
    src: "",
  };
  const data = await create.execute(input);
  expect(data).not.toBeNull();
  expect(data?.id).not.toBeUndefined();
});
