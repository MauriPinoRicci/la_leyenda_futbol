import styles from './page.module.css'
import {Navbar} from './components/Navbar/navbar'
import {Header} from './components/Header/header'
import {Footer} from './components/Footer/footer'
import {Servicios} from './components/Servicios/servicios'

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar />
        <Header />
        <Servicios />
        <Footer />
    </main>
  )
}
