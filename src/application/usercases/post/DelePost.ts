import PostRepository from "../../repositories/post/PostRepository";

export default class DelePost {
  constructor(private repository: PostRepository) {}
  async execute(id: string): Promise<void> {
    const post = await this.repository.deletePost(id)
    
  }
}
