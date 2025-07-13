import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Adminnav } from "../../Components/Adminnav/Adminnav"
// import { IsTokenExpired } from "./IsTokenExpired"
export const AdminHome=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token')
        axios.get("http://localhost:4000/admin/home",{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        .then((res)=>{
            console.log(res.data);
        // setData(res.data);
        })
        .catch((err) => {
        console.error(err);
        // If token is expired or invalid, redirect to login
        localStorage.removeItem("token");
        navigate("/admin/login");
      });
    },[]);
    return(
        <>
        <Adminnav/>    
        </>
    )
}