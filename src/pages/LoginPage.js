import React from 'react'
import { useAuth } from '../auth/useAuth'

export const LoginPage = ({history}) => {
    const auth = useAuth();
    const handleClick = () =>{
        auth.login();
        history.push("/dashboard");
    }

    return (
        <div>
            LoginPage
            <button
            onClick={handleClick}
            >
                Sign in
            </button>
        </div>
    )
}
