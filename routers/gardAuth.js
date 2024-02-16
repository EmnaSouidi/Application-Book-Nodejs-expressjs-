exports.isAuth=(req, res, next) =>{      // s'il est connexté
   if(req.session.userId){

   
    next();
}else {
    res.redirect('/login');
}
}


exports.notAuth=(req, res, next) =>{      // s'il n'est  pas connexté
    if(req.session.userId){
 
       res.redirect('/');
 }else {
     next();
 }
 }
