import styles from './Introduction.module.scss';
import AboutMeArticle from './modules/components/AboutMeArticle/AboutMeArticle';
import CarouselArticle from './modules/components/CarouselArticle/CarouselArticle';
import Partners from './modules/components/Partners/Partners';
import Resume from './modules/components/Resume/Resume';
import CarouselLinks from './modules/components/CarouselLinks/CarouselLinks';
import { useFetchBasicUserInfo } from './modules/hooks/useFetchBasicUserInfo';
import { useEffect, useState } from 'react';
import { portfolioAPI } from '../../services/portfolio-service';
import { useDeviceDetection } from '../../hooks/useDeviceDetection';
import { TrackingInfoResponse } from '../../services/interfaces/geo-location-service-interfaces';
import { locationAPI } from '../../services/geo-location-service';
import { Visitation } from '../../services/interfaces/portfolio-service-interfaces';

export default function Introduction() {
    const { basicUserInfo, carouselData } = useFetchBasicUserInfo();
    const [userLocationData, setUserLocationData] = useState<TrackingInfoResponse>();
    const visitaitonDevice = useDeviceDetection();

    useEffect(() => {
        locationAPI
            .trackUser()
            .then(data => setUserLocationData(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        const data: Visitation = {
            deviceType: visitaitonDevice,
            ipAddress: userLocationData?.IPv4,
            originCountry: userLocationData?.country_name
        }

        portfolioAPI
            .recordVisitation(data)
            .then(response => console.log('visitation recorded'))
            .catch(err => console.log(err));
    }, [userLocationData, visitaitonDevice]);

    return (
        <>
            <section id='intro' className={styles.container}>
                <AboutMeArticle description={basicUserInfo?.aboutMe} />
                <Resume link={basicUserInfo?.cvLink} />
                <CarouselArticle
                    images={carouselData}
                    progress={carouselData.slideProgress}
                />
            </section>
            <section className={styles['partners-and-links-article']}>
                <Partners partners={basicUserInfo ? basicUserInfo.partners : []} />
                <CarouselLinks
                    progress={carouselData.slideProgress}
                    data={carouselData.currentCarouselLabel}
                />
            </section>
        </>
    );
}   