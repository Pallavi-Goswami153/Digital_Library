import { useMemo } from "react";
import { jwtDecode } from "jwt-decode";
const useAdminLink=()=>{
    return useMemo(()=>{
        const token=localStorage.getItem('token');
        if(!token){
            return "/admin/login"
        }
        try{
           const {exp}=jwtDecode(token);
           const currentTime=Date.now()/1000;
           if(exp>currentTime){
            return "/admin/dashboard"
           }
           else{
            localStorage.removeItem('token')
            return "/admin/login"
           }
        }
        catch(err){
             localStorage.removeItem('token')
            return "/admin/login"
        }
    },[])
}
export default useAdminLink;