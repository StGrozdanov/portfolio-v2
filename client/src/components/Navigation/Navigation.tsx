import styles from './Navigation.module.scss';
import { useState } from 'react';

export default function Navigation() {
    const [burgerIsExpanded, setBurgerIsExpanded] = useState(false);

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src='/images/logo.png'></img>
                </div>
                <ul
                    className={
                        `${styles['nav-menu']} 
                        ${burgerIsExpanded
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
                    className={`${styles.hamburger} ${
                        burgerIsExpanded ? `, ${styles['active-burger']}` : ''
                        }`
                    }
                    onClick={() => burgerIsExpanded ? setBurgerIsExpanded(false) : setBurgerIsExpanded(true)}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </header >
    );
}