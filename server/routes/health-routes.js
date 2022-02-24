const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();
const healthController = require('../controllers/health-controller');

// routes for Health /api/health

router.get('/user/:user_id', healthController.getHealths);
router.get('/:id', healthController.getHealth);
router.post('/', healthController.addHealth);
router.patch('/:id', healthController.editHealth);
router.delete('/:id',  healthController.deleteHealth);

module.exports = router;