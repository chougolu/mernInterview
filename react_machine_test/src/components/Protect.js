import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Protect = (props) => {
    const navigate = useNavigate();
    const {Component} = props;
    useEffect(() => {
        const status = localStorage.getItem("status");
        if (status == "false") {
            navigate('/login')
        }
    })
    return (
        <div><Component /></div>
    )
}
