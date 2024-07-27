const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//rotas api

const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);

//rotas
app.get("/", (req, res) => {
  res.json({ message: "API funcionando!" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.sizyy70.mongodb.net/bancoapi?retryWrites=true&w=majority&appName=APICluster`
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.listen(process.env.PORT || 3000);
  });
