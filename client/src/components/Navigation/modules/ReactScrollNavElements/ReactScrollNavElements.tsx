import { Link } from 'react-scroll/modules';
import styles from './ReactScrollNavElements.module.scss';

type ReactScrollNavElementsProps = { update: () => void }

export default function ReactScrollNavElements({ update }: ReactScrollNavElementsProps) {
    return (
        <>
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
        </>
    );
}