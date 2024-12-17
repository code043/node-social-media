import PhotoRepository from "../../repositories/photo/PhotoRepository";

export default class GetAllPosts {
  constructor(private repository: PhotoRepository) {}
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
