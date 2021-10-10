import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Dashboard } from '../pages/Dashboard';
import { LoginPage } from '../pages/LoginPage';
import { NotFounds404 } from '../pages/NotFounds404';
import { PaymentsPage } from '../pages/PaymentsPage';
import { RegisterPage } from '../pages/RegisterPage';
import { PrivateRoute } from './PrivateRoute';
export const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/register" component={RegisterPage}/>
                <Route exact path="/payments" component={PaymentsPage}/>
                <Route  path="*" component={NotFounds404}/>
            </Switch>
        </Router>
    )
}
