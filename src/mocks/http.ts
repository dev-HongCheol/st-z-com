import { createMiddleware } from "@mswjs/http-middleware";
import express from "express";
import cors from "cors";
import { handlers } from "./handlers";
const app = express();
const port = 9090;

app.use(
  cors({
    origin: "https://dev-next.devhong.cc",
    optionsSuccessStatus: 200,
    credentials: false,
  })
);
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log("mock server run"));
