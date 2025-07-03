import React, { Component } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import SignUp from '../../pages/SignUp'

export default class InnerText extends Component {
    render() {
        return (
             <div className="flex flex-col items-center mx-56 gap-6">
                <h1 className="text-3xl font-bold text-blue-500 drop-shadow-sm mt-16">
                    👋 Welcome to DoctorConnect
                </h1>

                <p className="text-shadow-black text-sm mt-2 tracking-wide text-center">
                    Connecting you with verified doctors, securely and instantly.
                </p>

                <div className="mt-6">
                    <Link to ='/SignUp'>
                    <Button>Get Started</Button>
                    
                    </Link>
                    
                </div>
            </div>
        )
    }
}
