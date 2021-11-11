const express = require("express");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

const date = require(__dirname + "/date.js");

console.log(date);

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", function (req, res) {
  res.render("list", { listTitle: day, newItems: items });
});

app.post("/", (req, res) => {
  console.log(req.body);
  let newtask = req.body.newTask;
  let key = req.body.button;
  if (key === "Work") {
    workItems.push(newtask);
    res.redirect("/work");
    console.log(req.body);
  } else {
    items.push(newtask);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

// app.post("/work", (req, res) => {
//   let newtask = req.body.newTask;
//   workItems.push(newtask);
//   res.redirect("/work");
// });

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
