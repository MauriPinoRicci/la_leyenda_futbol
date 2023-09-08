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
            </div>
        </header>
    )
}

export { Contacto }
