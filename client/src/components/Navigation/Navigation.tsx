import { NavLink, useLocation } from 'react-router-dom';
import { useBurgerContext } from '../../hooks/useBurgerContext';
import styles from './Navigation.module.scss';
import ReactScrollNavElements from './modules/ReactScrollNavElements/ReactScrollNavElements';
import ReactRouterNavElements from './modules/ReactRouterNavElements copy/ReactRouterNavElements';

export default function Navigation() {
    const { isActive, update } = useBurgerContext();
    const location = useLocation();

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
                {
                    location.pathname.includes('jobs') || location.pathname.includes('projects')
                        ? <ReactRouterNavElements update={update} />
                        : <ReactScrollNavElements update={update} />
                }
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