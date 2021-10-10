import React from 'react'
import {
    Route,
    Redirect
}from "react-router-dom";
import { useAuth } from '../auth/useAuth';


export const PrivateRoute = ({component:Component,...rest}) => {

    const auth = useAuth();

    return (
        <Route {...rest}>
            {
                auth.isLogged() 
                ?(<Component/>)
                :(<Redirect to="/login"/>)
            }
        </Route>
    )
}
