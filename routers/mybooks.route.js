const BookContoller=require('../controllers/book.controller')
const router =require('express').Router()
const body =require('express').urlencoded({extended: true}) //si j'utilise delete avec form, on utlise body
const multer=require('multer')
const GardAuth = require('./gardAuth')






router.get('/',BookContoller.getMyBooksPage)
router.post('/delete/',body,BookContoller.deleteBookController)//delete avec form
// router.post('/delete/:id',BookContoller.deleteBookController) delete avec href

router.get('/update/:id', BookContoller.getMyBooksUpdatePage)
router.post('/update',multer({
    
    storage:multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'assets/uploads')
        },
        filename: function (req, file, cb) {
            cb(null,Date.now() + '-' + file.originalname)
        }
    })
}).single('image'),
GardAuth.isAuth,BookContoller.postUpdateBookController)




module.exports=router
