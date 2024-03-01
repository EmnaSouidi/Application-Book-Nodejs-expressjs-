const express = require('express')
const path= require('path')
const RouterHome=require('./routers/home.route')
const RouterBook=require('./routers/book.route')
const routerAuth=require('./routers/auth.route')
const routerMyBooks=require('./routers/mybooks.route')
const routeContact=require('./routers/contact.route')
const session= require('express-session')
var mongoDBStore= require('connect-mongodb-session')(session);
const flash = require('connect-flash')

// const dotenv= require('dotenv');
// dotenv.config()


const app = express()



app.use(express.static(path.join(__dirname, 'assets')))  //static file
app.set('view engine', 'ejs')
app.set('views', 'views')

var Store=new mongoDBStore({
    uri:'mongodb://localhost:27017/library',
    
    collection:'sessions'
  })
  app.use(flash())
  app.use(session({
    secret:'This is a secret',
    store:Store,
    resave:true,
    saveUninitialized:true,
    
  }))



app.use('/',RouterHome) 
app.use('/books',RouterBook)
app.use('/',routerAuth)
app.use('/mybooks',routerMyBooks) 
app.use('/',routeContact)

// app.get('/details', (req, res, next) => {
//     res.render('details')
// })


// app.get('/contact', (req, res, next) => {
//     res.render('contact',{verifUser:req.session.userId})
// })

app.get('/about', (req, res, next) => {
    res.render('about',{verifUser:req.session.userId})
})


// app.get('/addbook', (req, res, next) => {
//   res.render('addbook',{verifUser:req.session.userId})
// })

// app.get('/mybooks', (req, res, next) => {
//     res.render('mybooks',{verifUser:req.session.userId})
// })






app.listen(3000, () => {
    console.log('Server is running on port 3000')
})