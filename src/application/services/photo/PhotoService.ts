// import { Request } from "express";
// import Multer from "../../../infra/multer/config";
// import MulterUploader from "../../../infra/multer/config";

// interface UploadFile {
//   originalname: string;
//   mimetype: string;
//   buffer: Buffer;
// }

// export default class PhotoService {
//   processFileToString(file: UploadFile): string {
//     // Aqui, converta o `Buffer` para o formato desejado (por exemplo, base64 ou caminho do arquivo)
//     return `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
//   }
//   async processFileToSrc(file: Buffer, req: Request) {
//     const data = await MulterUploader.uploadImage(file, req);
//     console.log("Dado: ", data);
//     return data;
//   }
//   createImageBuffer(): Buffer {
//     const base64Image =
//       "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/XPzqmsAAAAASUVORK5CYII=";
//     return Buffer.from(base64Image, "base64");
//   }
// }
