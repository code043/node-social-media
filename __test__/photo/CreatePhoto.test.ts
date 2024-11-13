import PhotoInMemory from "../../src/infra/repositories/in-memory/photo/PhotoInMemory";
import CreatePhoto from "../../src/application/usercases/photo/CreatePhoto";
import PhotoService from "../../src/application/services/photo/PhotoService";
test("should create a new photo", async () => {
  const create = new CreatePhoto(PhotoInMemory);
  const photoProcess = new PhotoService();
  const base64Image =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/XPzqmsAAAAASUVORK5CYII=";
  photoProcess.processFileToSrc(Buffer.from(base64Image, "base64"));
  const input = {
    author: "cat",
    title: "Joel",
    peso: "10",
    idade: "12",
  };
  const photo = await create.execute(input);
  expect(photo?.id).not.toBeUndefined();
});
