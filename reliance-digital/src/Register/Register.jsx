import React, { useContext, useState } from 'react'
import { mynavcontext } from '../context/AuthContext'

import './Register.css'



export const Register = () => {



    const { setUserDetails } = useContext(mynavcontext)
    const [state, setState] = useState({ email: "", name: "", password: "" })


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setUserDetails(state)
    }





    return (
        <div>
            <form
                className="auth_form"
                onSubmit={handleSubmit}

            >

                <input type="name"
                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    name="name"
                    className="name"
                    placeholder="Enter Name"
                    // value={name}
                    onChange={handleChange}
                />

                <input
                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    type="email"
                    name="email"
                    className="email"
                    placeholder="Enter Email Address"
                    // value={email}
                    onChange={handleChange}
                />
                <br />
                <input
                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    type="password"
                    name='password'
                    className="password"
                    placeholder="Enter password"
                    // value={password}
                    onChange={handleChange}
                />
                <br />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
}
