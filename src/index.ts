import express from "express";
import multer from "multer";
import cors from "cors";
import { storage } from "./infra/multer/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage });

app.post("/photo", upload.single("image"), async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

app.listen(3000, () => {
  console.log("Running..");
});
