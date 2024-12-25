import path from "path"

export class PostService{
  private pathsystem: string = process.cwd()
  private pathlocalhost: string = "http://localhost:3000"
  photoPath(p: string  | undefined){   
    if(typeof p != 'string') throw Error("Must be string")
    return path.join(this.pathlocalhost,"/images/").concat(p)
  }
}