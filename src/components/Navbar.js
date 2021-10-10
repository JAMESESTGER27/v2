import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

export const Navbar = () => {
    const auth = useAuth();

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/register">register</Link></li>
                    <li><Link to="/dashboard">dashboard</Link></li>
                    <li><Link to="/payments">payments</Link></li>
                    <li>
                        <button
                        onClick={auth.logout}
                        >
                            Salir
                        </button>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
 