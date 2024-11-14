import PhotoInMemory from "../../src/infra/repositories/in-memory/photo/PhotoInMemory";
import CreatePhoto from "../../src/application/usercases/photo/CreatePhoto";
import express from "express";

test("should create a new photo", async () => {
  const create = new CreatePhoto(PhotoInMemory);

  const input = {
    author: "cat",
    title: "Joel",
    peso: "10",
    idade: "12",
    src: "",
  };
  const photo = await create.execute(input);
  console.log(photo);
  expect(photo?.id).not.toBeUndefined();
});
