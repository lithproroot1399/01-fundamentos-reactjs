  import styles from'./Header.module.css'
  import { Avatar } from './Avatar';

  import igniteLogo from '../assets/Ignite-logo.svg'; 


export function Header() {
    return (
        <header className={styles.header}>
            <Avatar src={igniteLogo} alt="Logotipo do ignite"/>
            <strong>Ignite Fid</strong>
        </header>
    )
}