const BookContoller=require('../controllers/book.controller')
const router =require('express').Router()
const body =require('express').urlencoded({extended: true}) //si j'utilise delete avec form, on utlise body






router.get('/',BookContoller.getMyBooksPage)
router.post('/delete/',body,BookContoller.deleteBookController)//delete avec form
// router.post('/delete/:id',BookContoller.deleteBookController) delete avec href

router.get('/update/:id', BookContoller.getMyBooksUpdatePage)




module.exports=router
