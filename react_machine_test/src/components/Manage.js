import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Manage = () => {
    const navigate = useNavigate();

    //Get data from local storage.
    const [arr, setArr] = useState(() => {
        const lcData = localStorage.getItem("react_machine_test");
        if (lcData) {
            return JSON.parse(lcData);
        } else {
            return [];
        }
    });

    //Delete.
    const deleteDetail = (delId) =>{
        const newArr = arr.filter((item,index)=>{
            return index != delId
        });
        localStorage.setItem('react_machine_test',JSON.stringify(newArr));
        window.location= 'manage'
    }

    //Edit.
    const  editDetail = (editId) =>{
        navigate(`/edit/${editId}`);
    }
    return (
        <>
            <div className="container mt-3">
                <h2 className="text-center">Manage Details</h2>
                <div className="row">
                    {arr.map((item, index) => {
                        return (
                            <div className="col-sm-6 mb-3" key={index}>
                                <div className="card">
                                    <div className="card-header">
                                        Name : { item.name}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Email : { item.email}</h5>
                                        <p className="card-text">Contact : { item.contact}</p>
                                        <button onClick={()=>deleteDetail(index)} className="btn btn-danger">Delete</button>
                                        &nbsp;
                                        <button onClick={()=>editDetail(index)}  className="btn btn-success">Edit</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
