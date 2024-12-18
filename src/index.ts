import express from "express";
import multer from "multer";
import cors from "cors";
import { storage } from "./infra/multer/config";
import CreateUser from "./application/usercases/user/CreateUser";
import UserInMemory from "./infra/repositories/in-memory/user/UserInMemory";
import LoginUser from "./application/usercases/user/LoginUser";
import { Token } from "./application/services/token/user-token";
import GetUser from "./application/usercases/user/GetUser";
import CreatePhoto from "./application/usercases/photo/CreatePhoto";
import PhotoInMemory from "./infra/repositories/in-memory/photo/PhotoInMemory";
import { checkToken } from "./infra/middleware/photo";
import GetAllPosts from "./application/usercases/photo/GetAllPosts";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage });
app.post("/jwt-auth/v1/token", async (req, res) => {
  const { name, password } = req. body
  const create = new LoginUser(UserInMemory);
  const bodyData = {
    name,
    password,
  };
  const data = await create.execute(bodyData);
  res.status(200).json({
    message: "User logged",
    token: data?.token
  })
})
app.post("/user/register", async (req, res) => {
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
app.post("/jwt-auth/v1/token/validate", async (req, res) => {
  const validateToken = new Token()
  const auth = req.headers['authorization']
  const token = auth?.split(' ')[1] as string
  const id = validateToken.validate(token)
  res.status(200).json({
    message: "Valid token",
    data: id
  })
})
app.post("/user", async (req, res) => {
  const getUser = new GetUser(UserInMemory);
  const validateToken = new Token()
  const auth = req.headers['authorization']
  const token = auth?.split(' ')[1] as string
  const id = validateToken.validate(token)
  const user = await getUser.execute(token);
  res.status(200).json({
    message: "",
    data: user
  })
})

app.get("/photo/", async (req, res) => {
  const getAll = new GetAllPosts(PhotoInMemory)
  const posts = getAll.execute()
  res.status(200).json({
    message: "all posts",
    data: posts
  })
})
app.get("photo/:id", async(req, res) => {
  res.status(200).json({
    message: "Post",
    data: null
  })
})
//photo/?_page=1&_total=10&_user=1
app.get("/photo/", async (req, res) => {

  console.log(req.query)
  res.end("query")
})
app.delete("/photo/:id", checkToken, async (req, res) => {
  res.end("delete")
})
app.post("/photo", checkToken, upload.single("image"), async (req, res) => {
  const create = new CreatePhoto(PhotoInMemory);
  const post = await create.execute(req.body);
  
  res.status(201).json({
    message: "Post",
    data: post
  });
});
app.post("/password/lost", checkToken, (req, res) => {
  res.end("Pass lost")
})
app.listen(3000, () => {
  console.log("Running..");
});
