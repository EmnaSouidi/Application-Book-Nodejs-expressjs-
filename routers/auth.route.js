const route =require('express').Router();
const authController=require('../controllers/auth.controller');
const body =require('express').urlencoded({extended: true});



route.get('/register',authController.getRegisterPage);
route.post('/register',body,authController.postRegisterData);

route.get('/login',authController.getLoginPage);
route.post('/login',body,authController.postLoginData)

module.exports=route;
 