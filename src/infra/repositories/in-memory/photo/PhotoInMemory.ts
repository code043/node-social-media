import PhotoRepository from "../../../../application/repositories/photo/PhotoRepository";
import Photo from "../../../../domain/entities/Photo";

class PhotoInMemory implements PhotoRepository {
  
  private photos: Photo[] = [];

  constructor(){
    this.photos = []
  }

  async createPhoto(input: Photo): Promise<Photo | undefined> {
    const newPhoto = {
      id: crypto.randomUUID(),
      ...input,
    };
    this.photos.push(newPhoto);
    const photo = this.photos.find((photo) => photo.id === newPhoto.id);
    if (!photo) return;
   

    return photo;
  }
  async listAllPosts(): Promise<Photo[] | undefined> {
    return await this.photos 
  }
}
export default new PhotoInMemory();
