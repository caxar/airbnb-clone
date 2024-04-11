const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const UserModel = require("./models/userModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();

// генирвация соли
const salthash = bcrypt.genSaltSync(10);
const jwtSecretToken = "shhhhh";

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
    const userData = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, salthash),
    });
  } catch (error) {
    res.status(422).json(error);
  }

  res.json(userData);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userData = await UserModel.findOne({ email });

  if (userData) {
    const correctpass = bcrypt.compareSync(password, userData.password);
    if (correctpass) {
      jwt.sign(
        { email: userData.email, id: userData._id },
        jwtSecretToken,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userData);
        }
      );
    } else {
      res.status(422).json("Пароль не совпадает");
    }
  } else {
    res.json("Пользователь не найден");
  }
});

app.listen(6200);
