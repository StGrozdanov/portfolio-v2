import styles from './ReactRouterNavElements.module.scss';
import { scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

type ReactRouterNavElementsProps = { update: () => void }

export default function ReactRouterNavElements({ update }: ReactRouterNavElementsProps) {
    const navigate = useNavigate();

    const navigateHandler = useCallback((to: string) => {
        navigate('/');
        update();
        setTimeout(() => scroller.scrollTo(to, {
            smooth: true,
            duration: 1400,
            activeClass: styles.active,
            spy: true,
        }), 10);
    }, [update]);

    return (
        <>
            <li className={styles['nav-item']}>
                <a onClick={() => navigateHandler('introduction')}>Introduction</a>
            </li>
            <li className={styles['nav-item']}>
                <a onClick={() => navigateHandler('about')}>About Me</a>
            </li>
            <li className={styles['nav-item']}>
                <a onClick={() => navigateHandler('work')}>My Work</a>
            </li>
            <li className={styles['nav-item']}>
                <a onClick={() => navigateHandler('contacts')}>Contact Me</a>
            </li>
        </>
    );
}