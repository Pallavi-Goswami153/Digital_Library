import jwt from "jsonwebtoken"
export const authenticatejwt=(req,res,next)=>{

     const token=req.header("Authorization")?.split(' ')[1];
     if(!token){
        res.status(401).send("Access denied")
     }
     jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err,user)=>{
            if(err){
                res.status(401).send("invalid token");
            }
           req.user=user
           next();
        }
     )
}