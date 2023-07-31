import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const navigate = useNavigate();
    //Empty state.
    const [value, setValue] = useState({
        "email": "",
        "password": ""
    });

    //Get data from local storage.
    const [arr, setArr] = useState(() => {
        const lcData = localStorage.getItem("react_machine_test");
        if (lcData) {
            return JSON.parse(lcData);
        } else {
            return [];
        }
    });

    //Input handler.
    const inputHandler = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value });
    }

    //Form handler.
    const formHandler = (event) => {
        event.preventDefault();
        const newArr = arr.filter((item, index) => {
            return item.email === value.email && item.password === value.password;
        });
        if (newArr.length > 0) {
            localStorage.setItem('status',true)
            localStorage.setItem('loginStatus',true)
            navigate('/manage');
        } else {
            toast.error('Invalid user !', {
                position: toast.POSITION.TOP_RIGHT
            });
            navigate('/login')
        }
    }
    return (
        <>
         <ToastContainer />
            <div className="container mt-3">
                <h2 className="text-center">Log-In Here !</h2>
                <form action="" onSubmit={formHandler}>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' required onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" required name='password' onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Log-In</button>
                        <h4 className="float-right">If you are not registered please <a href='/register'>register</a> first.</h4>
                    </div>
                </form>
            </div>
        </>
    )
}
