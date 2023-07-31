import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Edit = () => {
    const id = useParams();
    const navigate = useNavigate();

    //Empty state.
    const [value, setValue] = useState({
        "name": "",
        "contact": "",
        "email": "",
        "password": ""
    })

    // Get data from local storage.
    const [arr, setArr] = useState(() => {
        const lcData = localStorage.getItem("react_machine_test");
        if (lcData) {
            return JSON.parse(lcData);
        } else {
            return [];
        }
    });

    useEffect(() => {
        const newArr = arr.filter((item, index) => {
            return index == id.editId;
        });

        setValue({
            "name": newArr[0].name,
            "contact": newArr[0].contact,
            "email": newArr[0].email,
            "password": newArr[0].password
        })
    }, [])


    //Input handler.
    const inputHandler = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    //Form handler.
    const formHandler = (event) => {
        event.preventDefault();
        arr[id.editId] = value;
        localStorage.setItem("react_machine_test", JSON.stringify(arr))
        navigate('/manage')
    }
    return (
        <>
            <div className="container mt-3">
                <h2 className="text-center">Update Here !</h2>
                <form onSubmit={formHandler}>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' value={value.name} onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Contact</label>
                        <input type="number" name='contact' value={value.contact} onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' value={value.email} onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="text" name='password' value={value.password} onChange={inputHandler} className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}
