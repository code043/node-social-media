import { fileURLToPath } from 'url'
import path, { dirname } from "path"

export class PhotoService{
  private pathsystem: string = dirname(fileURLToPath(import.meta.url))
  private pathlocalhost: string = "http://localhost:3000"
  photoPath(p: string  | undefined){   
    if(typeof p != 'string') throw Error("Must be string")
    return path.join(this.pathlocalhost,"/images/").concat(p)
  }
}