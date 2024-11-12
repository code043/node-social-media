import PhotoRepository from "../../../../application/repositories/photo/PhotoRepository";
import Photo from "../../../../domain/entities/Photo";

class PhotoInMemory implements PhotoRepository {
  private photos: Photo[] = [];

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
}
export default new PhotoInMemory();
