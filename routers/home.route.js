const HomeContoller=require('../controllers/home.controller')
const router=require('express').Router()

router.get('/', HomeContoller.threeBooksController)




module.exports =router