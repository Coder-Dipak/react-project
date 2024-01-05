import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {

    // authentication logic written in protected route component which takes component as props 
    const role = "teacher";//change role to 'student' so that protected route can reject the component execution
    if (role === "student") {
        alert('you are not allowed to go to this route')
      return <Navigate to="/home" replace />;//replace:while returning to previous route where the protected route rejects the authentication it returns its previous route
    }
    return children;
}
