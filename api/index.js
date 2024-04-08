const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const UserModel = require("./models/userModal");
var bcrypt = require("bcryptjs");
const app = express();

// генирвация соли
const salthash = bcrypt.genSaltSync(10);

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
// ololohkalool
// 9DHC0eOX2AcDVwCm

mongoose.connect(
  `mongodb+srv://ololohkalool:9DHC0eOX2AcDVwCm@cluster0.2dsimrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);

app.get("/test", function (req, res) {
  res.json("Hello");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  // Создание нового юзера
  try {
    const user = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, salthash),
    });
  } catch (error) {
    res.status(422).json(error);
  }

  res.json(user);
});

app.listen(6200);
