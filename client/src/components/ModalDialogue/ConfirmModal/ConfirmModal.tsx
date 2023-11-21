import styles from './ConfirmModal.module.scss';

interface ConfirmModalProps {
    content: string,
    onConfirm: (...args: any[]) => void,
    onCancel: (...args: any[]) => void,
}

const unmountedStyleModal = {
    opacity: 0,
    top: '100vh',
    transition: 'all 700ms ease-in'
};

const mountedStyleModal = {
    opacity: 1,
    bottom: '100vh',
    transition: 'all 400ms ease-in'
};

export default function ConfirmModal({ content, onConfirm, onCancel }: ConfirmModalProps) {
    return (
        <article
            className={styles.container}
            style={Boolean(content) ? mountedStyleModal : unmountedStyleModal}
        >
            <h1>{content}</h1>
            <section className={styles['button-container']}>
                <button
                    className={styles['confirm-btn']}
                    onClick={onConfirm}
                >
                    Confirm
                </button>
                <button
                    className={styles['cancel-btn']}
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </section>
        </article>
    );
}