const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products");
const app = express();

app.set("views", __dirname + "/templates/views");
app.set("view engine", "twig");

app.get("/", (req, res) => {
  res.render("home", {
    name: "World",
    users: [
      { name: "Keri Russin", email: "karussin@student.fullsail.edu" },
      { name: "Logan Spreitzer", email: "ljspreitzer@gmail.com" },
    ],
  });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", productRouter);

app.listen(3000);
