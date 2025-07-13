import jwt from "jsonwebtoken"
export const authenticatejwt = (req, res, next) => {
   const token = req.cookies.token
   if (!token) {
      return res.status(401).send("Access denied")
   }
   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
   } catch (err) {
      return res.status(401).json({ message: "Token invalid or expired" });
   }
}
// when token is store in loaclstorage at frontend
// export const authenticatejwt=(req,res,next)=>{

//      const token=req.header("Authorization")?.split(' ')[1];
//      if(!token){
//        return  res.status(401).send("Access denied")
//      }
//      jwt.verify(
//         token,
//         process.env.JWT_SECRET,
//         (err,user)=>{
//             if(err){
//                return res.status(401).send("invalid token");
//             }
//            req.user=user
//            next();
//         }
//      )
// }

// when token will store at cookie