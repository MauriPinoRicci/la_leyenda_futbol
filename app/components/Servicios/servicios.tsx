import React from "react";
import styles from './servicios.module.css'
import Image from "next/image";
import salon from '../../../public/images/saloncanchas.jpeg'

const Servicios = () => {
    return (
        <section className={styles.servicios_header}>
            <h1 className={styles.servicios_title}>SERVICIOS</h1>
            <p className={styles.servicios_text}>Únicos y de Primer Nivel</p>
            <Image className={styles.servicios_img}
                src={salon}
                alt="salón de la leyenda futbol"
            />

            <div className={styles.servicios_column}>
                <div className={styles.column}>
                    <h2 className={styles.column_title}>Tercer Tiempo</h2>
                    <p className={styles.column_text}>Después del partido compartí un asado junto con tus
                        amigos. Contamos con parrilla completa.</p>
                </div>
            
                <div className={styles.column}>
                    <h2 className={styles.column_title} >Escuelita de Fútbol</h2>
                    <p className={styles.column_text}>La escuelita de LA LEYENDA FÚTBOL busca principalmente que todos los chicos encuentren un clima amable y de compañerismo,
                        tanto en sus pares como en sus profesores. El objetivo principal es que todos asistan a las clases con entusiasmo, deseo de jugar y sobre todo divertirse.
                    </p>
                </div>

                <div className={styles.column}>
                    <h2 className={styles.column_title}>Eventos</h2>
                    <p className={styles.column_text}>Descubrí nuestro salón completamente equipado para celebrar tu evento soñado. Ofrecemos instalaciones de primer nivel y un servicio excepcional.</p>
                </div>
            </div>
        </section>
    )
}
export { Servicios }