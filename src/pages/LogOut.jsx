import React from 'react';
import { logout } from '../authentication/auth';
import {  useNavigate } from 'react-router-dom';

export default function LogOut() {
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            await logout()
            navigate("/")
        } catch (err) {
            console.log("logout error", err.message);
        }
    }
    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={handleLogOut}
        >Logout</button>

    )

}
