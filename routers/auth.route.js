const route =require('express').Router();
const authController=require('../controllers/auth.controller');
const body =require('express').urlencoded({extended: true});
const GardAuth=require('./gardAuth')



route.get('/register',GardAuth.notAuth,authController.getRegisterPage);
route.post('/register',body,authController.postRegisterData);

route.get('/login',GardAuth.notAuth,authController.getLoginPage);
route.post('/login',body,authController.postLoginData)

route.post('/logout',authController.logoutFunctionController);

module.exports=route;
 