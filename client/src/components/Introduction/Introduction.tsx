import { useCallback, useEffect, useState } from 'react';
import styles from './Introduction.module.scss';
import { portfolioAPI } from '../../services/portfolio-service';
import { BasicInfoResponse } from '../../services/interfaces/portfolio-service-interfaces';
import { ImageProps } from '../../interfaces/component-props-interfaces';
import AboutMeArticle from './modules/components/AboutMeArticle/AboutMeArticle';
import CarouselArticle from './modules/components/CarouselArticle/CarouselArticle';
import Partners from './modules/components/Partners/Partners';

export default function Introduction() {
    const [basicUserInfo, setBasicUserInfo] = useState<BasicInfoResponse>();
    const [progress, setProgress] = useState(0);
    const [currentCarouselLabel, setCurrentCarouselLabel] = useState<string>('');

    useEffect(() => {
        portfolioAPI
            .getBasicUserInfo()
            .then(response => {
                setBasicUserInfo(response);
                setCurrentCarouselLabel(response.carousel[0].label);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            progress < 100 ? setProgress((oldProgress) => oldProgress + 0.04) : setProgress(0);
        }, 1);
    }, [progress]);

    const changeHandler = useCallback((label: string) => {
        setCurrentCarouselLabel(label);
        setProgress(0);
    }, []);

    const carouselData: ImageProps = {
        images: basicUserInfo?.carousel,
        changeHandler
    };

    return (
        <section className={styles.container}>
            <AboutMeArticle description={basicUserInfo?.aboutMe} />
            <CarouselArticle
                currentLabel={currentCarouselLabel}
                cvLink={basicUserInfo?.cvLink}
                images={carouselData}
                progress={progress}
            />
            <Partners partners={basicUserInfo ? basicUserInfo.partners : []} />
        </section>
    );
}   