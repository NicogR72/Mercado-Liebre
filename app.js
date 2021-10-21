const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  let htmlPath = path.join(__dirname, "./views/home.html");
  res.sendFile(htmlPath);
});

app.get("/register", (req, res) => {
  let htmlPath = path.join(__dirname, "./views/register.html");
  res.sendFile(htmlPath);
});

app.get("/login", (req, res) => {
  let htmlPath = path.join(__dirname, "./views/login.html");
  res.sendFile(htmlPath);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor Corriendo En El Puerto 3000");
})