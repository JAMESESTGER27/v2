import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import styles from "../styles/login.module.css"
export const UpdateProfilePage = () => {

	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const { currentUser, updatePassword, updateEmail } = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Las contraseñas no son iguales')
		}

		const promises = []
		setLoading(true)
		setError('')

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value))
		}

		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value))
		}

		Promise.all(promises)
			.then(() => {
				history.push('/login')
			})
			.catch(() => {
				setError('Fallo al cambiar')
			})
			.finally(() => {
				setLoading(false)
			})
	}


	return (
		<div>
			<div className={styles.container}>
				<div className={styles.info}>
					<h1>Actualizar email</h1>
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
						ref={emailRef}
						defaultValue={currentUser.email}
						placeholder="email"
					/>
					<input
						type="password"
						className={styles.input_field}
						ref={passwordRef}
						placeholder="password" 
						required
						/>
						<input
						type="password"
						className={styles.input_field}
						ref={passwordConfirmRef}
						placeholder="confirmar la contraseña"
						required
						/>
					<button type="submit" disabled={loading} className={styles.input}>Actualizar</button>
					<p><Link to='/login'><span>Regresar</span></Link></p>
				</form>
			</div>
		</div>
	)
}
