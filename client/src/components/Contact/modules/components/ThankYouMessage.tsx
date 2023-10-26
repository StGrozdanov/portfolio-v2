import styles from './ThankYouMessage.module.scss';

export default function ThankYouMessage() {
    return (
        <h4 className={styles['contact-section-send-success']}>
            Your message was delivered! Thanks for keeping in touch with me.
        </h4>
    );
}