import React from "react";
import styles from './servicios.module.css'

const Servicios = () => {
    return (
        <header className={styles.servicios_header}>
            <h1 className={styles.servicios_title}>SERVICIOS</h1>
            <p className={styles.servicios_text}>Únicos y de Primer Nivel</p>
            <p>foto salon</p>
            <p className={styles.servicios_text_info}>Para mayor información acerca de nuestros servicios comunicate al: </p>
            <span className={styles.servicios_text_num}> +54 9 261 517-4439</span>
        </header>
    )
}
export { Servicios }