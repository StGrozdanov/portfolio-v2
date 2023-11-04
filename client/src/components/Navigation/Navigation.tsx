import { NavLink } from 'react-router-dom';
import { useBurgerContext } from '../../hooks/useBurgerContext';
import styles from './Navigation.module.scss';
import { Link } from 'react-scroll/modules';

export default function Navigation() {
    const { isActive, update } = useBurgerContext();

    return (
        <nav className={styles.navbar}>
            <NavLink to={'/'} className={styles.logo}>
                <img src='/images/logo.png'></img>
            </NavLink>
            <ul
                className={
                    `${styles['nav-menu']} 
                        ${isActive
                        ? `, ${styles['active-menu']}`
                        : ''
                    }`
                }
            >
                <li className={styles['nav-item']}>
                    <Link
                        to='intro'
                        smooth={true}
                        duration={1400}
                        activeClass={styles.active}
                        spy={true}
                        onClick={update}
                    >
                        Introduction
                    </Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link
                        to='about'
                        smooth={true}
                        duration={1400}
                        activeClass={styles.active}
                        spy={true}
                        onClick={update}
                    >
                        About Me
                    </Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link
                        to='work'
                        smooth={true}
                        duration={1400}
                        activeClass={styles.active}
                        spy={true}
                        onClick={update}
                    >
                        My Work
                    </Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link
                        to='contacts'
                        smooth={true}
                        duration={1400}
                        activeClass={styles.active}
                        spy={true}
                        onClick={update}
                    >
                        Contact Me
                    </Link>
                </li>
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