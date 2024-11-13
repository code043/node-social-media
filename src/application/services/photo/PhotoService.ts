interface UploadFile {
  originalname: string;
  mimetype: string;
  buffer: Buffer;
}

class PhotoService {
  processFileToString(file: UploadFile): string {
    // Aqui, converta o `Buffer` para o formato desejado (por exemplo, base64 ou caminho do arquivo)
    return `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
  }
  processFileToSrc(file: Buffer) {}
}
