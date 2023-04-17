import React, { useContext } from 'react';
import { AuthContext } from '../../assets/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user , loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';
    console.log(from)

    if(loading){
        return <div>
            <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;

