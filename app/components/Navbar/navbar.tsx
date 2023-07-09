import React from "react";
import styles from './navbar.module.css'
import {
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineWhatsApp,
} from 'react-icons/ai'
import {

	IoFootballOutline
} from 'react-icons/io5'



const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar_logo}>
				<a href="https://www.google.com/maps/place/La+Leyenda+F%C3%BAtbol/@-32.9577012,-68.7585804,17z/data=!3m1!4b1!4m6!3m5!1s0x967e0d59c75e3e1b:0xe5a3e9e459ff6eac!8m2!3d-32.9577012!4d-68.7560055!16s%2Fg%2F11m__hl6wq?entry=ttu" target="_blank">
					<IoFootballOutline size="50px" />
				</a>

			</div>

			<div className={styles.navbar_center}>
				<a href="https://www.google.com/maps/place/La+Leyenda+F%C3%BAtbol/@-32.9577012,-68.7585804,17z/data=!3m1!4b1!4m6!3m5!1s0x967e0d59c75e3e1b:0xe5a3e9e459ff6eac!8m2!3d-32.9577012!4d-68.7560055!16s%2Fg%2F11m__hl6wq?entry=ttu" target="_blank">¿Dónde nos encontramos?</a>
			</div>
			<div className={styles.navbar_right}>
				<a className={styles.info} href="">Eventos</a>
				<a className={styles.icons_insta} href="https://www.instagram.com/laleyendafutbol/" target="_blank">
					<AiOutlineInstagram size="36px" />
				</a>
				<a className={styles.icons_face} href="https://www.facebook.com/profile.php?id=100063727195536" target="_blank">
					<AiOutlineFacebook size="36px" />
				</a>
				<a className={styles.icons_whatsapp} href="https://chat.whatsapp.com/BALuNp6T5o51ukLom91n31" target="_blank">
					< AiOutlineWhatsApp size="36px" />
				</a>

			</div>
		</nav>
	)
}

export { Navbar }