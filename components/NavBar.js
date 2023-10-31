import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar(){
    return(
    <ul className={styles.navbar}>
     <li><Link href={"/"}>Home</Link></li>
    <li><Link href='/projeto'>Projetos</Link></li>
    <li><Link href='/curriculo'>Currículo</Link></li>
    <li><Link href='/contato'>Contato</Link></li>
  </ul>
    )
}