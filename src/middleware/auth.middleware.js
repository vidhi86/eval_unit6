const jwt = require("jsonwebtoken");



const auth = (req,res,next)=>{
    const token = req.header.authorization;
    if(token){
        try{
            const decoded = jwt.verify(token.split(' ')[1],"media");
            if(decoded){
                req.body.authorID = decoded.authorID
                req.body.author = decoded.author
                next()
            }else{
                res.send({"msg":"Please Login"})
            }
        }catch(err){
            res.send({"err":err.message})
        }
    }else{
        res.send({"msg":"Please Login"})
    }
}


module.exports = {
        auth
}