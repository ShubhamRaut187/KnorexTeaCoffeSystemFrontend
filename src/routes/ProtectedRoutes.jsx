import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ProtectedRoutes({children}) {
    const navigate = useNavigate();
   let status = useSelector((store)=>{
    return store.status
   })
   if(status){
    return children
   }
   else{
    return <Navigate to={'/login'}/>
   }
}

export default ProtectedRoutes;