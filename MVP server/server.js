const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const port = 3000;

const imgRouter = require("./router/imgRouter.js");
const userRouter = require("./router/userRouter.js");

app.use(cors());

app.use("/img", imgRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server is running on ${port} `);
});
