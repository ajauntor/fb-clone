import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css'
import { auth, provider } from './firebase.config';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

const Login = () => {
    const [state , dispatch] = useStateValue();


    const signIn = () =>{
        //Sign In....
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">

            <div className="login_logo">
                <img className="circle_logo" src="
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