const jwt = require("jsonwebtoken");

const authenticateToken =(req,res,next) =>{
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1]
    if(!token) {
        res.status(401).json({message:"Unauthorize user!"})
    } else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET,(error,user)=>{
            if(error) {
                res.status(401).json({message:"Token is not verified!"})
            } else {
                req.user = user
                next()
            }
        });
    }
}

module.exports = authenticateToken