import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Signup() {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Name' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Register
                    </button>
                </form>
                <p>Already Have an Account?</p>
                <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Login
                </Link>

            </div>
        </div>
    );
}

export default Signup