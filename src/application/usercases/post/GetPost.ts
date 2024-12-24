import PostRepository from "../../repositories/post/PostRepository";

export default class GetPost {
  constructor(private repository: PostRepository) {}
  async execute(id: string): Promise<Output | null> {
    const post = await this.repository.getPost(id)
    if(!post) return null
    return post
  }
}

type Output = {
  author: string;
  title: string;
  peso: number;
  idade: number;
  src?: string;
  id?: string;
};
