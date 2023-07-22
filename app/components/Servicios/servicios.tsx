import React from "react";
import styles from './servicios.module.css'

const Servicios = () => {
    return (
        <header className={styles.servicios_header}>
            <h1 className={styles.servicios_title}>¿Qué Ofrecemos?</h1>
            <p className={styles.servicios_text}>Contamos con unas instalaciones preparadas para festejar tú evento soñado, también contamos con 2 canchas de fútbol sintetico </p>
        </header>
    )
}
export {Servicios}