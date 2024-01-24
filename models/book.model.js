const { rejects } = require('assert')
const mongoose = require('mongoose')
const { resolve } = require('path')


var schemabook=mongoose.Schema({
    // _id:String,
    title:String,
    description:String,
    auther:String,
    price:Number,
    image:String,
})

var book = mongoose.model('Book',schemabook)
var url= 'mongodb://localhost:27017/library'


exports.getThreeBooks=()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url)
    .then(()=>{ 
        return book.find({}).limit(3)
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
        return book.find({})
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
        return book.findById(id)
    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>reject(err))
    

    })
}
