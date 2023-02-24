import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

// ejs template engine
app.set("view engine", "ejs");

// Static Files Middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
