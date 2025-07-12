export const home=async(req,res)=>{
    res.status(200).json({msg:"This is protected route",user:req.user})
}