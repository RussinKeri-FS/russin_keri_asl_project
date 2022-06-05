const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/Products');

// GET
router.get('/', productsCtrl.index);
router.get('/new', productsCtrl.form);
router.get('/:id', productsCtrl.show);
router.get('/:id/edit', productsCtrl.form);

// POST
router.post('/', productsCtrl.create);
router.post('/:id', productsCtrl.update);
router.post('/:id/delete', productsCtrl.remove);

// DELETE
router.delete('/:id', productsCtrl.remove);

module.exports = router;