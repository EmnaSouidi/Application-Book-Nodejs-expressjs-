
const BookContoller=require('../controllers/book.controller')
const router=require('express').Router()
const GardAuth=require('./gardAuth')
const route=require('./auth.route') 
const multer = require('multer') //c'est un middleware



router.get('/',GardAuth.isAuth, BookContoller.getAllBooksController)
router.get('/:id',GardAuth.isAuth, BookContoller.getOneBookDetailsController)

route.get('/addbook',GardAuth.isAuth, BookContoller.getAddBookController)
route.post('/addbook',multer({
    
    storage:multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'assets/uploads')
        },
        filename: function (req, file, cb) {
            cb(null,Date.now() + '-' + file.originalname)
        }
    })
}).single('image'),
GardAuth.isAuth, BookContoller.postAddBookController)
module.exports =router

