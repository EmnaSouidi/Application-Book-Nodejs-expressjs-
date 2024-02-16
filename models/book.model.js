// const { rejects } = require('assert')
const mongoose = require('mongoose')
// const { resolve } = require('path')


var schemabook=mongoose.Schema({
    // _id:String,
    title:String,
    description:String,
    author:String,
    price:Number,
    image:String,
    userId:String
})

let Book = mongoose.model('book',schemabook)
let url= 'mongodb://localhost:27017/library'


exports.getThreeBooks=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
    .then(()=>{ 
        return Book.find({}).limit(3)
    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>reject(err))
    

    })
}


exports.getAllBooks=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
    .then(()=>{ 
        return Book.find({})
    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>reject(err))
    

    })
}


exports.getOneBookDetails=(id)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
    .then(()=>{ 
        return Book.findById(id)
    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>reject(err))
    

    })
}
exports.postDataBookModel=(title,description,author,price,image,userId)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url).then(()=>{


            let book=new Book({
                title:title,
                description:description,
                author:author,
                price:price,
                image:image,
                userId:userId
            })
              return book.save()
    
}).then(()=>{
    mongoose.disconnect()
    resolve('added')
}).catch((err)=>{
    mongoose.disconnect()
    reject(err)
})
})
}
