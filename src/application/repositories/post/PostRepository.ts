import Post from "../../../domain/entities/Post";

export default interface PostRepository {
  createPost(input: Post): Promise<Post | undefined>;
  listAllPosts(): Promise<Post[] | undefined>
  getPost(id: string): Promise<Post | undefined>
  updatePost(id: string, data: Post): Promise<Post | undefined>
  deletePost(id: string): Promise<void>
}
