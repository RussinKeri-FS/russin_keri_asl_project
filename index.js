const express = require("express");
const bodyParser = require('body-parser');
const productRouter = require('./routes/Products');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRouter)


app.listen(3000);