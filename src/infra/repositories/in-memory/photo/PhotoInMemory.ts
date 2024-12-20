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
  async getPost(id: string): Promise<Photo | undefined> {
    const post = this.photos.find((photo) => photo.id === id)
    if(!post){
      return
    }
    return post
  }
  updatePost(id: string, data: Photo): Promise<Photo | undefined> {
    throw new Error("Method not implemented.");
  }
  deletePost(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
}
export default new PhotoInMemory();
