//http://localhost:3000/get-list
//update-item
//delete-item

const express = require('express');
const router = express.Router();

const listCont = require('../controllers/listCont');

router.get('/get-list',listCont.getList);
router.post('/post-item',listCont.postItem);
router.post('/update-item/:id',listCont.updateItem);
router.post('/delete-item/:id',listCont.deleteItem);
module.exports = router;