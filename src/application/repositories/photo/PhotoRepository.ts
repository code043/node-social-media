import Photo from "../../../domain/entities/Photo";

export default interface PhotoRepository {
  createPhoto(input: Photo): Promise<Photo | undefined>;
}
