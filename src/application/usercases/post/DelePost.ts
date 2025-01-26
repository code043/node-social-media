import PostRepository from "../../repositories/post/PostRepository";

export default class DeletePost {
  constructor(private repository: PostRepository) {}
  async execute(id: string): Promise<void> {
    const post = await this.repository.deletePost(id)
    
  }
}
