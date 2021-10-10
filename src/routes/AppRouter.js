import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { AuthProvider } from '../context/AuthContext';
import { Crud } from '../pages/Crud';
import { ForgotPassword } from '../pages/ForgotPassword';
import { LoginPage } from '../pages/LoginPage';
import { NotFounds404 } from '../pages/NotFounds404';
import { Signup } from '../pages/Signup';
import { UpdateProfilePage } from '../pages/UpdateProfilePage';
import { PrivateRoute } from './PrivateRoute';
export const AppRouter = () => {
    return (
        <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={LoginPage}/>
                <PrivateRoute exact path="/crud" component={Crud}/>
                <PrivateRoute path='/updateprofile' component={UpdateProfilePage} />
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/forgorpassword" component={ForgotPassword}/>
                <Route  path="*" component={NotFounds404}/>
              </Switch>
            </AuthProvider>
        </Router>
    )
}
