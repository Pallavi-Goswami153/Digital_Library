import {jwtDecode} from "jwt-decode";
export const IsTokenExpired=()=>{
    const token=localStorage.getItem('token')
    if(!token) return true;
     try{
        const {exp}=jwtDecode(token);
        console.log(exp)
        const now=Date.now()/1000;// current time in seconds;
        return exp<now;
     }
     catch(err){
           return true;
     }

}