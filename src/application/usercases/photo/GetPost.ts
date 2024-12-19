import PhotoRepository from "../../repositories/photo/PhotoRepository";

export default class GetPost {
  constructor(private repository: PhotoRepository) {}
  async execute(id: number): Promise<Output | null> {
    return null
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
