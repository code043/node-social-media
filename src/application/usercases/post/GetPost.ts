import PhotoRepository from "../../repositories/photo/PhotoRepository";

export default class GetPost {
  constructor(private repository: PhotoRepository) {}
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
