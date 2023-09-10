import React from "react";
import styles from './contacto.module.css'

const Contacto = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_opacity}></div>
            <div className={styles.header_content}>
                <h1 className={styles.header_title}>CONTACTO</h1>
                <div className={styles.header_text_info}>
                    <p>Para mayor información comunícate al:</p>
                    <a href="https://chat.whatsapp.com/BALuNp6T5o51ukLom91n31" target="blank" className={styles.header_text_num}>+54 9 261 517-4439</a>
                </div>
                <div className={styles.ubicacion_center}>
                    <a href="https://www.google.com/maps/place/La+Leyenda+F%C3%BAtbol/@-32.9577012,-68.7585804,17z/data=!3m1!4b1!4m6!3m5!1s0x967e0d59c75e3e1b:0xe5a3e9e459ff6eac!8m2!3d-32.9577012!4d-68.7560055!16s%2Fg%2F11m__hl6wq?entry=ttu" target="_blank">¿Dónde nos encontramos?</a>
                </div>
            </div>
        </header>
    )
}

export { Contacto }
