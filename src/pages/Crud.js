import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from "../styles/crud.module.css";
export const Crud = () => {

	const [error, setError] = useState('')
	const { currentUser, logout } = useAuth()
	const history = useHistory()

	const handleClick = async() => {
		setError('')

    try {
      await logout()
      history.push('/')
    } catch {
      setError('Hubo un fallo al salir')
    }
	}


	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.container}>
					<a href="/" className={styles.logo}>
						Aplication CRUD
					</a>
					<div className={styles.bar}>
							<h2>Bienvenido { currentUser.email }</h2>
						<button><Link to='/updateprofile'>Actualizar perfil</Link></button>
          	<button onClick={handleClick}>Salir</button>
					</div>
				</div>
			</nav>
			{error && <h1>{error}</h1>}
		</>
	)
}
