const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`ASL Project! Keri Russin`);
});

app.get('/products/all', (req, res) => {
    JSON.stringify(req.query) === '{}'
    ? res.send(`Products, ${req.headers.page}, ${req.headers.sort}, ${req.headers.order}`)
    : req.send(`Products, ${req.query.sort}`);
});

app.get('/products/:id-:color', (req, res) => {
    res.send(`Product, ${req.params.id}, ${req.params.size}, ${require.params.color}`);
});

app.get('/products/:id', (req,res) => {
    res.send(`Product, ${req.params.id}`);
});


app.listen(3001)