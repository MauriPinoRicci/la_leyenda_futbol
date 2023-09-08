import React from "react";
import styles from './footer.module.css'
import {
	AiOutlineInstagram,
	AiOutlineFacebook,
	AiOutlineWhatsApp,
} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_text}>Copyright © 2023 - Todos los derechos reservados.</div> 
            <div className={styles.footer_right}>
				<a className={styles.icons_insta} href="https://www.instagram.com/laleyendafutbol/" target="_blank">
					<AiOutlineInstagram size="30px" />
				</a>
				<a className={styles.icons_face} href="https://www.facebook.com/profile.php?id=100063727195536" target="_blank">
					<AiOutlineFacebook size="30px" />
				</a>
				<a className={styles.icons_whatsapp} href="https://chat.whatsapp.com/BALuNp6T5o51ukLom91n31" target="_blank">
					< AiOutlineWhatsApp size="30px" />
				</a>

			</div>



        </footer>
    )
}
export { Footer }