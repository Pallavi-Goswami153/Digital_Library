import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Adminnav } from "../../Components/Adminnav/Adminnav"
export const AdminHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {  //login=> dashboard => papers =>admin(verify krega k dashboard pe jana ya login)
            axios.get("http://localhost:4000/admin/verify", {
                withCredentials: true,
            })
            .then(()=>{
                console.log("i am on home")
            })
                .catch(() => {
                     console.log("navigating to login") //or agr error mtlb login pe jao
                    navigate("/admin/login");
                });
        }, 5000); // check every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Adminnav />
        </>
    )
}



// local storage

// useEffect(()=>{
//     const token=localStorage.getItem('token')
//     axios.get("http://localhost:4000/admin/home",{
//         headers:{
//             Authorization:`Bearer ${token}`,
//         }
//     })
//     .then((res)=>{
//         console.log(res.data);
//     // setData(res.data);
//     })
//     .catch((err) => {
//     console.error(err);
//     // If token is expired or invalid, redirect to login
//     localStorage.removeItem("token");
//     navigate("/admin/login");
//   });
// },[]);
// return (
//     <>
//         <Adminnav />
//     </>
// )
// }