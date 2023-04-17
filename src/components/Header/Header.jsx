import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../assets/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut =() =>{
         logOut()
         .then(result=>{})
         .catch(error=>console.log(error.message))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {!user && <Link to="/login">Login</Link>}
                <Link to="/signup">SignUp</Link>
                <Link >{
                    user && <button className='bg-red-500' onClick={handleLogOut}>SignOut</button>
                }</Link>
              
            </div>
        </nav>
    );
};

export default Header;