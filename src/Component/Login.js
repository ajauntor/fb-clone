import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css'

const Login = () => {

    const signIn = () =>{
        //Sign In....
    }

    return (
        <div className="login">

            <div className="login_logo">
                <img src="
                            https://i.ibb.co/0C3QNLN/Facebook-logo.png
                " alt="" />

                <img src="
                            https://i.ibb.co/JmFYNsb/Facebook-Logo-2019-svg.png
                " alt="" />
            </div>

                <Button type="submit" onClick={signIn} >
                    Sign In
                </Button>
        </div>
    );
};

export default Login;