import express from "express";
import multer from "multer";
import cors from "cors";
import { storage } from "./infra/multer/config";
import CreateUser from "./application/usercases/user/CreateUser";
import UserInMemory from "./infra/repositories/in-memory/user/UserInMemory";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage });
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  const bodyData = {
    name,
    email,
    password
  }
  const create = new CreateUser(UserInMemory);
  const data = await create.execute(bodyData);
  res.status(201).json({
    message: "Registered",
    id: data
  })
})
app.post("/photo", upload.single("image"), async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

app.listen(3000, () => {
  console.log("Running..");
});
