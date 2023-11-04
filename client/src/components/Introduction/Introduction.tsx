import styles from './Introduction.module.scss';
import AboutMeArticle from './modules/components/AboutMeArticle/AboutMeArticle';
import CarouselArticle from './modules/components/CarouselArticle/CarouselArticle';
import Partners from './modules/components/Partners/Partners';
import Resume from './modules/components/Resume/Resume';
import CarouselLinks from './modules/components/CarouselLinks/CarouselLinks';
import { useFetchBasicUserInfo } from './modules/hooks/useFetchBasicUserInfo';

export default function Introduction() {
    const { basicUserInfo, carouselData } = useFetchBasicUserInfo();

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