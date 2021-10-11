import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from "../styles/login.module.css"
export const ForgotPassword = () => {

	const emailRef = useRef()
	const { resetPassword } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')

	const handleSubmit = async(e) =>{
		e.preventDefault();

		try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Ve a tu bandeja de entrada, sigue los pasos')
    } catch {
      setError('Fallo al cambiar tu password')
    }

    setLoading(false)

	}

	return (
		<div>
			<div className={styles.container}>
				<div className={styles.info}>
					<h1>Recuperar la contraseña</h1>
					{error && <h1>{error}</h1>}
				</div>
			</div>
			<div className={styles.form}>
				<div className={styles.thumbnail}>
					{/* <img src={logo} alt="logo" /> */}
				</div>
				<form onSubmit={handleSubmit} className={styles.login__form}>
					<input
					type="email" 
					className={styles.input_field} 
					autoFocus
					ref={emailRef}
					placeholder="email" 
					/>
					<button type="submit" disabled={loading} className={styles.input}>Restaurar la contraseña</button>
					<p><Link to="/login"><span>Regresar</span></Link></p>
				</form>
			</div>
		</div>
	)
}
