import CreatePost from "../../src/application/usercases/post/CreatePost";
import PostInMemory from "../../src/infra/repositories/in-memory/post/PostInMemory"
test("should create a post with token", async () => {
  //
  const create = new CreatePost(PostInMemory);
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
