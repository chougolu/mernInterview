import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {

    //Empty state.
    const [value, setValue] = useState({
        name:"",
        contact:"",
        email:"",
        password:""
    })

    //Array.
    const [arr, setArr] = useState(()=>{
        const lcData = localStorage.getItem("react_machine_test");
        if(lcData){
            return JSON.parse(lcData);
        }else{
            return [];
        }
    });
    
    //Input Handler.
    const inputHandler = (event) =>{
        setValue({...value,[event.target.name]:event.target.value})
    }
    
    //Form Handler.
    const formHandler = (event) =>{
        event.preventDefault();
        setArr([...arr, value]); //arr.push(value).
        toast.success('Registration successfully !', {
                position: toast.POSITION.TOP_RIGHT
            });
    }
    
    //Set data in local storage.
    useEffect(()=>{
        localStorage.setItem('react_machine_test',JSON.stringify(arr));
    },[arr])
  return (
    <>
         <ToastContainer />
        <div className="container mt-3">
        <h2 className="text-center">Registration Here !</h2>
            <form action="" onSubmit={formHandler}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' required onChange={inputHandler} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Contact</label>
                    <input type="number" name='contact' required onChange={inputHandler} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" required name='email' onChange={inputHandler} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" required name='password' onChange={inputHandler} className="form-control" />
                </div>
                <div className="form-group">
                   <button className="btn btn-primary">Register</button>
                <h4 className="float-right"><a href='/login'>Login</a> if you are registered.</h4>
                </div>
            </form>
        </div>
    </>
  )
}
