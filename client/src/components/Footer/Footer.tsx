import { useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { SocialsResponse } from '../../services/interfaces/portfolio-service-interfaces';
import { portfolioAPI } from '../../services/portfolio-service';
import { useLocation } from 'react-router-dom';

export default function Footer() {
    const [socials, setSocials] = useState<SocialsResponse>();
    const location = useLocation();

    useEffect(() => {
        portfolioAPI
            .getSocialsInfo()
            .then(response => setSocials(response))
            .catch(err => console.log(err));
    }, []);

    return (
        !location.pathname.includes('admin')
            ?
            <footer className={styles["site-footer"]}>
                <article className={styles['site-footer-left-article']}>
                    <ul className={styles["social-links"]}>
                        <li className={styles['facebook']}>
                            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={200}>
                                <a href={socials?.socialMedia.facebook}><i className="fa fa-facebook" /></a>
                            </AnimationOnScroll>
                        </li>
                        <li className={styles['linkedIn']}>
                            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={300}>
                                <a href={socials?.socialMedia.linkedIn} target="blank">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </AnimationOnScroll>
                        </li>
                        <li className={styles['github']}>
                            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={400}>
                                <a href={socials?.socialMedia.github} target="blank">
                                    <i className="fa fa-github" />
                                </a>
                            </AnimationOnScroll>
                        </li>
                        <li className={styles['email']}>
                            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={500}>
                                <a href={`mailto:${socials?.socialMedia.email}`}>
                                    <i className="fa fa-envelope" />
                                </a>
                            </AnimationOnScroll>
                        </li>
                    </ul>
                </article>
                <article className={styles["site-footer-right-article"]}>
                    <h3 className={styles["footer-title"]}>Stoyan Grozdanov</h3>
                    <ul className={styles['site-footer-life-rules']}>
                        <li>Live</li>
                        <li>Learn</li>
                        <li>Progress</li>
                        <li>One step at a time.</li>
                    </ul>
                </article>
            </footer >
            : null
    );
}