const express = require("express");
const app = express();

// GET /products/8719-small-red HTTP/1.1
app.get('/', (req, res) => {
    res.send('ASL Project! Keri Russin');
});

// GET /products/8719 HTTP/1.1
app.get('/products/:productId', (req, res) => {
    res.send('Product: ' + req.params.productId);
    });

// GET /products/all?sort=price HTTP/1.1
app.get('/products/:productId-:productSize-:productColor', (req, res) => {
    res.send('Product: ' + req.params.productId + req.params.productSize + req.params.productColor);
});


app.listen(3000);