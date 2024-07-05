const express=require('express');
const { RegiterController, LoginController, } = require('../controllers/userController');
const authMiddleware=require("../Middleware/authMiddleware")

const router=express.Router();



router.post('/signup',RegiterController);
router.post('/login',LoginController);






module.exports=router;