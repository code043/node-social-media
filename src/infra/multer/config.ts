import multer from "multer";
import path from "path";
import fs from "fs";
import { Request, Response, NextFunction } from "express";

export default class MulterUploader {
  // Configuração do Multer para salvar arquivos na pasta 'uploads'
  private static storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.resolve(__dirname, "..", "uploads");
      fs.mkdirSync(uploadPath, { recursive: true }); // Cria a pasta 'uploads' se não existir
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const fileExtension = path.extname(file.originalname);
      cb(null, `${file.fieldname}-${uniqueSuffix}${fileExtension}`);
    },
  });

  // Instância do Multer configurada para um único arquivo com o campo 'file'
  public static multerInstance = multer({
    storage: MulterUploader.storage,
    // limits: { fileSize: 2 * 1024 * 1024 }, // Limite de 2MB
    fileFilter: (req, file, cb) => {
      const allowedMimes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Tipo de arquivo inválido."));
      }
    },
  }).single("file"); // Espera um único arquivo com o campo 'file'
}
