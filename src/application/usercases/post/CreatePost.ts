import PostRepository from "../../repositories/post/PostRepository";

export default class CreatePost {
  constructor(private repository: PostRepository) {}
  async execute(input: Input): Promise<Output | null> {
    const photo = await this.repository.createPost(input)
    if (!photo) return null;
    return photo;
  }
}

type Input = {
  author: string;
  title: string;
  peso: number;
  idade: number;
  src?: string;
};
type Output = {
  author: string;
  title: string;
  peso: number;
  idade: number;
  src?: string;
  id?: string;
};
