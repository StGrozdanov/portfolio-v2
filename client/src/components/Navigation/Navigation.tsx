import { useBurgerContext } from '../../hooks/useBurgerContext';
import styles from './Navigation.module.scss';

export default function Navigation() {
    const { isActive, update } = useBurgerContext();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src='/images/logo.png'></img>
            </div>
            <ul
                className={
                    `${styles['nav-menu']} 
                        ${isActive
                        ? `, ${styles['active-menu']}`
                        : ''
                    }`
                }
            >
                <li className={styles['nav-item']}>Introduction</li>
                <li className={styles['nav-item']}>About Me</li>
                <li className={styles['nav-item']}>Professional Experience</li>
                <li className={styles['nav-item']}>Personal Projects</li>
                <li className={styles['nav-item']}>Contact Me</li>
            </ul>
            <div
                className={`${styles.hamburger} ${isActive ? `, ${styles['active-burger']}` : ''
                    }`
                }
                onClick={update}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </nav>
    );
}