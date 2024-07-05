const express=require('express');
const { wheaterController } = require('../controllers/wheaterdataController');


const router=express.Router();





router.get("allwheaterdata",wheaterController)






module.exports=router;