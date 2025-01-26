const express = require('express');
const termsController = require('../controllers/termsController');

const router = express.Router();

router.get('/', termsController.getAllTerms);
router.get('/:id', termsController.getTermById);
router.post('/', termsController.addTerm);
router.put('/:id', termsController.updateTerm);
router.delete('/:id', termsController.deleteTerm);

module.exports = router;
