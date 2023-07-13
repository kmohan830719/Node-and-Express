const express=require('express');
const router=express.Router();
const contactController = require('../controllers/contact.js')


router.get('/contactus',contactController.getContactus)


router.post('/success',contactController.postcontactus)

module.exports=router;