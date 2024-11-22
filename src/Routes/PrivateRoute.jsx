import React, { useContext } from 'react'
import { authContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

export default function PrivateRoute({ children }) {

    const { user, loading } = useContext(authContext)
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate state={{from:location?.pathname}} to='/login'></Navigate>
    }

    return children;
}
