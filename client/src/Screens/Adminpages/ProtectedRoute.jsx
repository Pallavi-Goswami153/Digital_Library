import React from 'react'
import { Navigate } from 'react-router-dom';
import { IsTokenExpired } from './IsTokenExpired';
export const ProtectedRoute=({children})=>{
    // const token=localStorage.getItem('token');
    if(IsTokenExpired())
    {
        localStorage.removeItem('token');
        return <Navigate to="/admin/login" replace/>
    }
    return children;
}

 