const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/Products');

// GET
router.get('/', productCtrl.index);
router.get('/new', productCtrl.form);
router.get('/:id', productCtrl.show);
router.get('/:id/edit', productCtrl.form);
router.get('/:id/delete', productCtrl.remove);

// POST
router.post('/', productCtrl.create);
router.post('/:id', productCtrl.update);

// DELETE
router.delete('/:id', productCtrl.remove);

module.exports = router;