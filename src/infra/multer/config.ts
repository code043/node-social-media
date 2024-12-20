import multer from "multer";
import { fileURLToPath } from 'url'
import path, { dirname } from "path"
import crypto from 'crypto'

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(dirname(fileURLToPath(import.meta.url)),"../uploads/"));
  },
  filename: function (req, file, cb) {
    const extensaoArquivo = file.originalname.split(".")[1];

    const novoNomeArquivo = crypto.randomBytes(64).toString("hex");

    cb(null, `${novoNomeArquivo}.${extensaoArquivo}`);
  },
});
