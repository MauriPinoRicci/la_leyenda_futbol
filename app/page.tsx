import styles from './page.module.css'
import {Navbar} from './components/Navbar/navbar'
import {Header} from './components/Header/header'
import {AcercaDeNosotros} from './components/AcercaDeNosotros/acercaDeNosotros'
import {Torneo} from './components/Torneo/torneo'
import {Footer} from './components/Footer/footer'

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar />
        <Header />
        <AcercaDeNosotros />
        <Torneo />
        <Footer />
    </main>
  )
}
