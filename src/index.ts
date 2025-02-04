import path from "path"
import express from "express";
import multer from "multer";
import cors from "cors";
import { storage } from "./infra/multer/config";
import CreateUser from "./application/usercases/user/CreateUser";
import UserInMemory from "./infra/repositories/in-memory/user/UserInMemory";
import LoginUser from "./application/usercases/user/LoginUser";
import { Token } from "./application/services/token/user-token";
import GetUser from "./application/usercases/user/GetUser";
import PostInMemory from "./infra/repositories/in-memory/post/PostInMemory";
import { checkToken } from "./infra/middleware/post";
import GetAllPosts from "./application/usercases/post/GetAllPosts";
import GetPost from "./application/usercases/post/GetPost";
import { PostService } from "./application/services/post/PostService";
import CreatePost from "./application/usercases/post/CreatePost";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images',express.static(path.join(process.cwd(), 'src', 'infra', 'images')))
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
  const getAll = new GetAllPosts(PostInMemory)
  const posts = await getAll.execute()
  
  res.status(200).json({
    message: "all posts",
    data: posts
  })
})
app.get("/photo/:id", async(req, res) => {
  const { id } = req.params
  const getPost = new GetPost(PostInMemory)
  const post = await getPost.execute(id)
  res.status(200).json({
    message: "Post " + id,
    data: post
  });
})
//photo/?_page=1&_total=10&_user=1
app.get("/photo/", async (req, res) => {

  console.log(req.query)
  res.end("query")
})
app.delete("/photo/:id", checkToken, async (req, res) => {
 res.end('delete')
})
app.post("/photo", upload.single("image"), async (req, res) => {
  const p = new PostService()
  const bodyDate = {
    ...req.body,
    src: p.photoPath(req.file?.filename) 
  }
  const create = new CreatePost(PostInMemory);
  const post = await create.execute(bodyDate);
 
  res.status(201).json({
    message: "Post",
    data: post
  });
});
app.post("/password/lost", checkToken, (req, res) => {
  res.end("Pass lost")
})
app.post("/password/reset", (req, res) => {
  res.end("Reset")
})
app.post("/stats", checkToken, (req, res) => {
  res.end("Stats")
})

app.listen(3000, () => {
  console.log("Running..");
});
