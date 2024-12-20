import Photo from "../../../domain/entities/Photo";

export default interface PhotoRepository {
  createPhoto(input: Photo): Promise<Photo | undefined>;
  listAllPosts(): Promise<Photo[] | undefined>
  getPost(id: string): Promise<Photo | undefined>
  updatePost(id: string, data: Photo): Promise<Photo | undefined>
  deletePost(id: string): Promise<void>
}
