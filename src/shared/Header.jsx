
import { NavLink } from 'react-router'
import styles from './Header.module.css';

function Header(){
return(
    <div className={styles.headerSection} >
       <img alt='Gambian Flag Logo' className={styles.gambiaLogo} src='https://res.cloudinary.com/doiwe9d5a/image/upload/v1652141906/Yanni%20Website/gambia-g153e16f25_640_wgls0o.png'></img>
        <h1 className={styles.header}>Gambian Farm Finder</h1>
        <nav className={styles.nav}>
            <NavLink to="/" className={({isActive}) =>isActive ? styles.active : styles.inactive}>Home </NavLink>
            <NavLink to="/about" className={({isActive}) =>isActive ? styles.active : styles.inactive}>About</NavLink>
            <NavLink to="/saved" className={({isActive}) =>isActive ? styles.active : styles.inactive}>Saved Farms</NavLink>
        </nav>
    </div>
)

}

export default Header