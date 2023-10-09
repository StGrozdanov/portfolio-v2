import styles from './Partners.module.scss';

interface PartnerProps {
    partners: string[],
}

export default function Partners({ partners }: PartnerProps) {
    return (
        <ul className={styles['clients-ul']}>
            {
                partners.length > 0 && partners.map((partnerURL, index) =>
                    <li key={partnerURL + index}>
                        <img src={partnerURL} />
                    </li>)
            }
        </ul>
    );
}