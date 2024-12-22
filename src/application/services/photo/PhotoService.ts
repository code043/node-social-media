export class PhotoService{
  private pathsystem: string = "http://localhost:3000/"
  photoPath(path: string){
    return this.pathsystem.concat(path)
  }
}