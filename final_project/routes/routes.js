var express = require('express');
var router = express.Router();

var contactController = require('../controllers/contactController');

router.get('/', contactController.index);

router.get('/list', contactController.getAllContacts);

router.get('/form', contactController.getRegister);

router.post('/form', contactController.postRegister);

router.get('/find', contactController.getFind);

router.post('/find', contactController.postFind);

router.post('/delete', contactController.delete);

router.post('/update', contactController.update);

router.post('/toUpdate', contactController.toUpdate);

module.exports = router;