import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
    const logOut = () =>{
        localStorage.setItem("loginStatus",false);
        localStorage.setItem("status",false);
        navigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">React-App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {(localStorage.getItem("loginStatus") == "true") ?
                        <li className="nav-item active">
                            <a style={{cursor:'pointer'}} className="nav-link" onClick={logOut}>Log-Out <span className="sr-only">(current)</span></a>
                        </li> :
                        <>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/register">Register <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                        </li>
                        </>
                        }
                        <li className="nav-item active">
                            <Link className="nav-link" to="/manage">Dashboard <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
