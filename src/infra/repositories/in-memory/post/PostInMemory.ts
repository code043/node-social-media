import PostRepository from "../../../../application/repositories/post/PostRepository";
import Post from "../../../../domain/entities/Post";

class PostInMemory implements PostRepository {
  
  private posts: Post[] = [];

  constructor(){
    this.posts = [{
      "id": "252ae843-22d3-4f85-af4d-fc9133d9ae9d",
		"author": "Me",
		"title": "New Post",
		"peso": 10,
		"idade": 8,
		"src": "649deae644f191824b654a9a501af7b473c81ef5d46d6a17900238aa5cb7da06cd312bd71dbcddfe95c08ea5a366bd752116685811c56cb8ffefae88b7d4d81e.png"
    }]
  }
  

  async createPost(input: Post): Promise<Post | undefined> {
    const newPost = {
      id: crypto.randomUUID(),
      ...input,
    };
    this.posts.push(newPost);
    const post = this.posts.find((Post) => Post.id === newPost.id);
    if (!post) return;
   

    return post;
  }
  async listAllPosts(): Promise<Post[] | undefined> {
    return await this.posts 
  }
  async getPost(id: string): Promise<Post | undefined> {
    const post = this.posts.find((post) => post.id === id)
    if(!post){
      return
    }
    return post
  }
  updatePost(id: string, data: Post): Promise<Post | undefined> {
    throw new Error("Method not implemented.");
  }
  deletePost(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}
export default new PostInMemory();
