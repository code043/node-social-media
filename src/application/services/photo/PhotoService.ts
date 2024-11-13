import { Request } from "express";
import Multer from "../../../infra/multer/config";

interface UploadFile {
  originalname: string;
  mimetype: string;
  buffer: Buffer;
}

export default class PhotoService {
  processFileToString(file: UploadFile): string {
    // Aqui, converta o `Buffer` para o formato desejado (por exemplo, base64 ou caminho do arquivo)
    return `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
  }
  processFileToSrc(file: Buffer, req?: Request) {
    const multer = new Multer(file);
    multer.image();
  }
  createImageBuffer(): Buffer {
    const base64Image =
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/XPzqmsAAAAASUVORK5CYII=";
    return Buffer.from(base64Image, "base64");
  }
}
