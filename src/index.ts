import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/infra/uploads/");
  },
  filename: function (req, file, cb) {
    const extensaoArquivo = file.originalname.split(".")[1];

    const novoNomeArquivo = require("crypto").randomBytes(64).toString("hex");

    cb(null, `${novoNomeArquivo}.${extensaoArquivo}`);
  },
});

const upload = multer({ storage });

app.post("/photo", upload.single("image"), async (req, res) => {
  console.log(req.body.file);
  res.status(200).json({
    message: "ok",
  });
});

app.listen(3000, () => {
  console.log("Running..");
});
