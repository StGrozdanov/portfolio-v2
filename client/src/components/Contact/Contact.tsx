import styles from './Contact.module.scss';
import ThankYouMessage from './modules/ThankYouMessage';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [sendEmail, setSendEmail] = useState(false);
    const form = useRef(null);

    function sendEmailHandler(e: React.SyntheticEvent) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        let { name, email, description } = Object.fromEntries(formData);

        if (email.toString().trim() !== '' && name.toString().trim() !== '' && description.toString().trim() !== '') {
            emailjs
                .sendForm('service_oqn9vj9', 'template_igd22ij', form.current as unknown as string, 'n0npgfKwhAdyT8_tv')
                .then(result => {
                    if (result.text == 'OK') {
                        setSendEmail(true);
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <section id='contacts' className={styles['contact-section']}>
            <header className={styles["contact-section-header"]}>
                <h2><span style={{ color: "orange" }}>Contact</span> Me</h2>
                <p>Don't hesitate to contact me!</p>
            </header>
            <main>
                <form ref={form} onSubmit={sendEmailHandler}>
                    {sendEmail ? <ThankYouMessage /> : null}
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