import styles from './Footer.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Footer() {
    return (
        <footer className={styles["site-footer"]}>
            <article className={styles['site-footer-left-article']}>
                <ul className={styles["social-links"]}>
                    <li className={styles['facebook']}>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={200}>
                            <a href="#"><i className="fa fa-facebook" /></a>
                        </AnimationOnScroll>
                    </li>
                    <li className={styles['linkedIn']}>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={300}>
                            <a href="https://www.linkedin.com/in/stoyan-grozdanov" target="blank">
                                <i className="fa fa-linkedin" />
                            </a>
                        </AnimationOnScroll>
                    </li>
                    <li className={styles['github']}>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={400}>
                            <a href="https://github.com/StGrozdanov" target="blank">
                                <i className="fa fa-github" />
                            </a>
                        </AnimationOnScroll>
                    </li>
                    <li className={styles['email']}>
                        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={500}>
                            <a href="mailto:st.grozdanov.developer@gmail.com">
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
    );
}