import styles from './AdminNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faUserLarge, faGear, faHandshake, faAddressCard, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';

export default function AdminNav() {
    const location = useLocation();

    return (
        <nav className={styles["admin-panel-nav"]}>
            <NavLink to={'/'}>
                <img
                    className={styles["admin-panel-nav-logo"]}
                    src="/images/favicon.png"
                    alt=""
                />
            </NavLink>
            <ul className={styles["admin-panel-nav-ul"]}>
                <li className={styles["admin-panel-nav-li"]}>
                    <NavLink to={'/admin/dashboard'}>
                        <FontAwesomeIcon
                            icon={faChartSimple}
                            className={location.pathname === '/admin/dashboard' ? styles.active : ''}
                        />
                    </NavLink>
                </li>
                <li className={styles["admin-panel-nav-li"]}>
                    <NavLink to={'/admin/users'}>
                        <FontAwesomeIcon
                            icon={faUserLarge}
                            className={location.pathname === '/admin/users' ? styles.active : ''}
                        />
                    </NavLink>
                </li>
                <li className={styles["admin-panel-nav-li"]}>
                    <NavLink to={'/admin/recipes'}>
                        <FontAwesomeIcon
                            icon={faAddressCard}
                            className={location.pathname === '/admin/recipes' ? styles.active : ''}
                        />
                    </NavLink>
                </li>
                <li className={styles["admin-panel-nav-li"]}>
                    <NavLink to={'/admin/comments'}>
                        <FontAwesomeIcon
                            icon={faHandshake}
                            className={location.pathname === '/admin/comments' ? styles.active : ''}
                        />
                    </NavLink>
                </li>
                <li className={styles["admin-panel-nav-li"]}>
                    <NavLink to={'/admin/comments'}>
                        <FontAwesomeIcon
                            icon={faGlobe}
                            className={location.pathname === '/admin/comments' ? styles.active : ''}
                        />
                    </NavLink>
                </li>
            </ul>
            <FontAwesomeIcon
                icon={faGear}
                className={styles["fa-gear"]}
            />
        </nav>
    );
}