import React from "react";
import styles from './header.module.css'
import Image from "next/image";
import logo from '../../../public/images/logo.png'
import "../../animate.css"

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header_opacity}></div>
			<div className={styles.header_content}>
				<div className={`${styles.header_image} animate__animated animate__zoomIn`}>
					<a href="https://chat.whatsapp.com/BALuNp6T5o51ukLom91n31" target="bla">
						<Image className={styles.header_img}
							src={logo}
							alt="logo de la leyenda futbol"
						/>
					</a>
				</div>
				<div className={styles.header_description}>
					<p className={styles.header_parrafo}>Somos una familia futbolera, que teníamos una visión en común y era desarrollar un proyecto relacionado a nuestro deporte favorito, con un toque de historia familiar y con mucho esfuerzo, logramos poner en marcha éste sueño que iniciamos allá por el año 2014.</p>
				</div>
			</div>
		</header>
	)
}
export { Header }