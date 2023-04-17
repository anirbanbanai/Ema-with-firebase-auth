import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../assets/AuthProvider';

const Login = () => {
const [show, setShow] = useState(false);

    const { SignIn } = useContext(AuthContext)
    const nevigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const handleLogIn = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email , password)

        SignIn(email, password)
        .then(result=>{
            const loggedUser  = result.user;
            console.log(loggedUser)
            form.reset()
            nevigate(from, {replace:true})
        })
        .catch(error=>console.log(error.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                            <p onClick={()=>setShow(!show)}><small>
                                {
                                    show ? <span>Hide password</span> :<span>Show password</span>
                                }
                                </small></p>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New to this website ? <Link to='/signup'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;