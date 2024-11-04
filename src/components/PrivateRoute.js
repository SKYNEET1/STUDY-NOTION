import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({isloggedin,children}) {
    if(isloggedin){
        return children;
        // this means you will go to Dashboard
    }
    else{
      return <Navigate to="/login"/>  
    }

}

export default PrivateRoute