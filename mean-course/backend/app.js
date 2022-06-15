const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/post");

const app = express();

mongoose
  .connect(
    "mongodb+srv://linford:ne3zF6VhPjP256mz@cluster0.2ws6b.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts",postsRoutes)

module.exports = app;
