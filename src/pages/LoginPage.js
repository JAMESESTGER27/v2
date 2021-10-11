import React, { useRef, useState } from 'react'
import { Link,useHistory } from "react-router-dom"
import { useAuth } from '../context/AuthContext'
import logo from "../assets/logo.png"
import styles from "../styles/login.module.css"

export const LoginPage = () => {

	const emailRef = useRef()
	const passwordRef = useRef()
	const { login } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setError('')
			setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value)
			history.push('/crud')
		} catch {
			setError('Fallo al ingresar a su cuenta')
		}
		setLoading(false)
	}

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.info}>
					<h1>Ingresar</h1>
					<span>Made by JAMESESTGER 🧡</span>
					{error && <h1>{error}</h1>}
				</div>
			</div>

			<div className={styles.form}>
				<div className={styles.thumbnail}>
					<img src={logo} alt="logo" />
				</div>
				<form onSubmit={handleSubmit} className={styles.login__form}>
					<input
					type="email" 
					className={styles.input_field} 
					ref={emailRef}
					placeholder="email" 
					/>
					<input
					type="password"
					className={styles.input_field} 
					ref={passwordRef} 
					placeholder="username" />
					<button type="submit" disabled={loading} className={styles.input}>Ingresar</button>
					<p>Hey! no tienes cuenta? <Link to='/signup'><span>Registrate</span></Link></p>
					<p>Olvidaste la contraseña verdad? Ingresa aqui por favor. <Link to='/forgorpassword'><span>Recuperar</span></Link></p>
				</form>
			</div>
		</div>
	)
}
