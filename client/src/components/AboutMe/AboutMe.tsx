import { useEffect, useState } from 'react';
import { portfolioAPI } from '../../services/portfolio-service';
import styles from './AboutMe.module.scss';
import Article from './modules/Article';
import { AboutMeResponse } from '../../services/interfaces/portfolio-service-interfaces';

export default function AboutMe() {
    const [aboutMe, setAboutMe] = useState<AboutMeResponse>();

    useEffect(() => {
        portfolioAPI
            .getAboutMeInfo()
            .then(response => {
                setAboutMe(response);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <section className={styles.container}>
            <article className={styles.slogan}>
                <h4>About Me</h4>
                <h2><span>I am crafting</span> dreams <span>into digital</span> experiences<span>.</span></h2>
            </article>
            <div className={styles['article-container']}>
                <Article heading={'Tech Stack'} details={aboutMe ? aboutMe.techStack : []} />
                <Article heading={'Soft Skills'} details={aboutMe ? aboutMe.softSkills : []} />
                <Article heading={'Hobbies'} details={aboutMe ? aboutMe.hobbies : []} />
            </div>
        </section>
    );
}