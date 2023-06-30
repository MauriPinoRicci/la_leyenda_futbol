import React from "react";
import styles from './acercaDeNosotros.module.css'


const AcercaDeNosotros = () =>{
    return(
        <section className={styles.acercaDeNosotros}>
			<h2 className={styles.acercaDeNosotros_title}>Acerca de Nosotros...</h2>
			<p className={styles.acercaDeNosotros_description}>Somos una familia futbolera, que teníamos una visión en común y era desarrollar un proyecto realacionado a nuestro deporte favorito, con un toque de historia familiar. Con mucho esfuerzo, logramos poner en marcha éste sueño que iniciamos allá por el año 2014.</p>
		</section>
    )
}
export {AcercaDeNosotros}