import styles from './Resume.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useBurgerContext } from '../../../../../hooks/useBurgerContext';

type CvLink = { link: string | undefined };

export default function Resume({ link }: CvLink) {
    const { isActive } = useBurgerContext();

    return (
        <a target="_blank" href={link} style={isActive ? { display: 'none' } : {display: 'block'}}>
            <div className={styles.cv}>
                <FontAwesomeIcon
                    icon={faFileArrowDown}
                    beat
                    style={{ color: "orange", marginBottom: 10 }}
                    fontSize={18}
                />
                RESUME
            </div>
        </a>
    );
}