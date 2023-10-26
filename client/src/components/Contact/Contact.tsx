import styles from './Contact.module.scss';
import ThankYouMessage from './modules/components/ThankYouMessage';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRef } from 'react';
import { useSendEmail } from './modules/hooks/useSendEmail';

export default function Contact() {
    const form = useRef(null);
    const { emailIsSent, sendEmailHandler } = useSendEmail(form);

    return (
        <section id='contacts' className={styles['contact-section']}>
            <header className={styles["contact-section-header"]}>
                <h2><span style={{ color: "orange" }}>Contact</span> Me</h2>
                <p>Don't hesitate to contact me!</p>
            </header>
            <main>
                <form ref={form} onSubmit={sendEmailHandler}>
                    {emailIsSent ? <ThankYouMessage /> : null}
                    <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
                        <article className={styles['contact-section-credentials-article']}>
                            <input type="text" placeholder="Name" name="name" id="name" required={true} />
                            <input type="email" placeholder="E-mail" name="email" id="email" pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$" required={true} />
                        </article>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={100}>
                        <article>
                            <textarea placeholder="Message" rows={7} name="description" id="description" required={true}></textarea>
                        </article>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} delay={500}>
                        <button className={styles["contact-button"]} type="submit">Send Message</button>
                    </AnimationOnScroll>
                </form>
            </main>
        </section>
    );
}