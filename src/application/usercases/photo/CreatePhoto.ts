import PhotoRepository from "../../repositories/photo/PhotoRepository";

export default class CreatePhoto {
  constructor(private repository: PhotoRepository) {}
  async execute(input: Input): Promise<Output | null> {
    const photo = await this.repository.createPhoto(input);
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
