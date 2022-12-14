import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin:
      "https://3000-nnhasan0290-javascriptp-u7413wnmdqn.ws-us61.gitpod.io",
    credentials: true,
    methods: "GET,PUT,POST,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(cookieParser());

app.get("/", (req, res, nex) => {
  let token = "the_most_awaited_cookie";
  res.cookie("token", token).json({ success: true, token });
});
app.get("/cookie", (req, res, nex) => {
  console.log(req.cookies);
  res.send({ msg: "check the server console if cookie found or not" });
});

app.listen(3001, () => {
  console.log("The aplication is listening to port 3001");
});
