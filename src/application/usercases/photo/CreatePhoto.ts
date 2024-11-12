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
  peso: string;
  idade: string;
  src: string;
};
type Output = {
  author: string;
  title: string;
  peso: string;
  idade: string;
  src?: string;
  id?: string;
};
