import React from "react";
import styles from './header.module.css'
import Image from "next/image";
import logo from '../../../public/images/logo.png'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header_opacity}></div>
			<div className={styles.header_content}>
				<h1 className={styles.header_title}>Bienvenidos a La Leyenda Fútbol</ h1>
				<div className={styles.header_image}>
					<a href="">
						<Image className={styles.header_img}
							src={logo}
							alt="logo de la leyenda futbol"
						/>
					</a>
				</div>
				<div className={styles.header_description}>
					<p className={styles.header_parrafo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente alias incidunt quaerat illum cumque ipsam commodi amet voluptas totam reprehenderit, delectus deserunt inventore mollitia, voluptate quisquam? Unde odio recusandae natus?</p>
				</div>
			</div>
		</header>
	)
}
export { Header }