const authModel=require('../models/auth.model')




exports.getRegisterPage=(req,res,next)=>{
    res.render('register')
}

exports.postRegisterData=(req,res,next)=>{
    authModel.registerFunctionModel(req.body.name, req.body.email, req.body.password).then((user)=>{
        res.redirect('/login')
    }).catch((msg)=>{
        console.log(msg)
    })
}




exports.getLoginPage=(req,res,next)=>{
    res.render('login')
}

exports.postLoginData=(req,res,next)=>{
    authModel.loginFunctionModel(req.body.email, req.body.password).then((id)=>{
        req.session.userId=id
    }).catch((err)=>{
        console.log(err)
    })
}
