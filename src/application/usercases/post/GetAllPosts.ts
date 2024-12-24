import PostRepository from "../../repositories/post/PostRepository";

export default class GetAllPosts {
  constructor(private repository: PostRepository) {}
  async execute(): Promise<Output[] | null> {
    const posts = await this.repository.listAllPosts()
    if (!posts) return null;
    return posts;
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
