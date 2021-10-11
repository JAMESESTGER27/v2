import React from 'react'
import styles from "../styles/error.module.css"
export const NotFounds404 = () => {
	return (
		<div>
			<h1 style={{textAlign:"center"}}>404 Error Page</h1>
			<p className={styles.zoom_area}>Ups! Paso algo  </p>
			<section className={styles.error_container}>
				<span><span>4</span></span>
				<span>0</span>
				<span><span>4</span></span>
			</section>
		</div>
	)
}
