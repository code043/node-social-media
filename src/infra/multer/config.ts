import multer from "multer";
import path from "path"
import fs from "fs"
import crypto from 'crypto'

const build = path.join(process.cwd(), '/dist', '/src', '/infra', '/images/');

if (process.env.NODE_ENV === 'production' && !fs.existsSync(build)) {
  fs.mkdir(build, { recursive: true }, (err) => {
      if(err) console.log(err)
  });
}
           
export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(),'/src', '/infra', '/images'));
  },
  filename: function (req, file, cb) {
    const extensaoArquivo = file.originalname.split(".")[1];

    const novoNomeArquivo = crypto.randomBytes(64).toString("hex");

    cb(null, `${novoNomeArquivo}.${extensaoArquivo}`);
  },
});
