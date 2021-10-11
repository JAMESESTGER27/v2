import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom";
import style from "../styles/login.module.css";
export const Signup = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const { signup } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	const handleSubmit = async (e) =>{
		e.preventDefault();

		try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/crud')
    } catch {
      setError('Fallo al crear la cuenta')
    }
    
    setLoading(false)

	}


	return (
		<>
		<div>
			<div className={style.container}>
				<div className={style.info}>
					<h2>Registrate</h2>
					{
						error && <h1>{error}</h1>
					}
				</div>
			</div>

			<div className={style.form}>
				<div className={style.thumbnail}>
					{/* <img src={register} alt="register" /> */}
				</div>
				<form onSubmit={handleSubmit} className={style.login__form}>
					<input 
					type="email"
					autoFocus
					className={style.input_field}
					required
					ref={emailRef}
					placeholder="email" 	 
					/>
					<input 
					type="password"
					className={style.input_field}
					required
					placeholder="password"
					ref={passwordRef}	 
					/>
					<button type="submit" disabled={loading} className={style.input}>Registrate</button>
					<p>Tienes cuenta? <Link to="/login">Inicia Sesion</Link></p>
				</form>
				</div>
			</div>
		</>
    )
}
