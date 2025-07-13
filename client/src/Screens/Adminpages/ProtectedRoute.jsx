import React from 'react'
import { Navigate } from 'react-router-dom';
// import { IsTokenExpired } from './IsTokenExpired';
import { useEffect, useState } from "react";
import axios from "axios";

export const ProtectedRoute = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/admin/verify", {
      withCredentials: true,
    })
    .then(() => {
      setIsAuthenticated(true);
    })
    .catch(() => {
      setIsAuthenticated(false);
    })
    .finally(() => {
      setAuthChecked(true);
    });
  }, []);

  if (!authChecked) return <div>Loading...</div>;

  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;

  return children;
};

// export const ProtectedRoute=({children})=>{
//     if(IsTokenExpired())
//     {
//         localStorage.removeItem('token');
//         return <Navigate to="/admin/login" replace/>
//     }
//     return children;
// }

 