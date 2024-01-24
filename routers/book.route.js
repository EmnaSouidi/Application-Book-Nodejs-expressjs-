
const BookContoller=require('../controllers/book.controller')
const router=require('express').Router()



router.get('/', BookContoller.getAllBooksController)
router.get('/:id', BookContoller.getOneBookDetailsController)

module.exports =router