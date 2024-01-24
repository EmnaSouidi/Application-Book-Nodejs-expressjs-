const homeModel=require('../models/book.model')  

exports.threeBooksController=(req,res,next) => {
    

    homeModel.getThreeBooks().then((books) => {
        res.render('index',{books:books});
    })
}








