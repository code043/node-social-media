import PhotoRepository from "../../../../application/repositories/photo/PhotoRepository";
import Photo from "../../../../domain/entities/Post";

class PhotoInMemory implements PhotoRepository {
  
  private posts: Photo[] = [];

  constructor(){
    this.posts = [{
      "id": "252ae843-22d3-4f85-af4d-fc9133d9ae9d",
		"author": "Me",
		"title": "New Post",
		"peso": 10,
		"idade": 8,
		"src": "649deae644f191824b654a9a501af7b473c81ef5d46d6a17900238aa5cb7da06cd312bd71dbcddfe95c08ea5a366bd752116685811c56cb8ffefae88b7d4d81e.png"
    }]
  }
  

  async createPhoto(input: Photo): Promise<Photo | undefined> {
    const newPhoto = {
      id: crypto.randomUUID(),
      ...input,
    };
    this.posts.push(newPhoto);
    const photo = this.posts.find((photo) => photo.id === newPhoto.id);
    if (!photo) return;
   

    return photo;
  }
  async listAllPosts(): Promise<Photo[] | undefined> {
    return await this.posts 
  }
  async getPost(id: string): Promise<Photo | undefined> {
    const post = this.posts.find((photo) => photo.id === id)
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
