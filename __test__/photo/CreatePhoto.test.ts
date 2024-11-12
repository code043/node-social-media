import PhotoInMemory from "../../src/infra/repositories/in-memory/photo/PhotoInMemory";
import CreatePhoto from "../../src/application/usercases/photo/CreatePhoto";

test("should create a new photo", async () => {
  const create = new CreatePhoto(PhotoInMemory);
  const input = {
    author: "cat",
    title: "Joel",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...",
    peso: "10",
    idade: "12",
  };
  const photo = await create.execute(input);
  expect(photo?.id).not.toBeUndefined();
});
