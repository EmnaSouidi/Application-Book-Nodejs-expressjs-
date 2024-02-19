
const bookModel=require('../models/book.model')  




exports.getAllBooksController=(req,res,next) => {
    

    bookModel.getAllBooks().then(books=> {
        res.render('books',{books:books,verifUser:req.session.userId})
    })
}

exports.getOneBookDetailsController=(req,res,next)=> {
    let id=req.params.id
    bookModel.getOneBookDetails(id).then(resbook=> {
        res.render('details',
        {book:resbook,verifUser:req.session.userId}
        )
    })
}

exports.getAddBookController=(req,res,next)=> {
    res.render('addbook',{verifUser:req.session.userId,Smessage:req.flash('Successmessage')[0],Emessage:req.flash('ErrorMesssage')[0]})
}

exports.postAddBookController=(req,res,next)=> {
    console.log(req.body)
    console.log(req.file.filename) 
    bookModel.postDataBookModel(req.body.title,req.body.description,req.body.author,req.body.price,req.file.filename,req.session.userId).then((msg)=>{
        req.flash('Successmessage',msg)
       res.redirect('/addbook')
    }).catch((err)=>{
        console.log('ErrorMesssage',err)
        res.redirect('/addbook')
    })
}


exports.getMyBooksPage=(req,res,next) => {
    bookModel.getMyBooks(req.session.userId).then((books)=>{
        console.log(req.session.userId)
        console.log(books)
        res.render('mybooks',
        {verifUser:req.session.userId,
        mybooks:books})

    })
    
}
exports.deleteBookController=(req,res,next) => {
    let id=req.body.bookId //si j'utilise delete book avec form
    // let id=req.params.id si j'utilise delete book avec href
    bookModel.deletebook(id).then((verif)=>{
        res.redirect('/mybooks') //reload page directement

    }).catch((err)=>{
        console.log(err)
    })
}

exports.getMyBooksUpdatePage=(req,res,next) => {
    res.render('updateBook',{verifUser:req.session.userId})
}