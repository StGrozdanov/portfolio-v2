import { useParams } from "react-router-dom";
import { useJobsContext } from "../../hooks/useJobsContext"
import { JobsContextType } from "../../contexts/JobsContext";
import HeadingImageArticle from "./modules/HeadingImageArticle/HeadingImageArticle";
import ThreeSectionDescriptionArticle from "./modules/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";
import ImageArticle from "./modules/ImageArticle/ImageArticle";
import DescriptionArticle from "./modules/DescriptionArticle/DescriptionArticle";
import NextJobArticle from "./modules/NextProjectArticle/NextJobArticle";

export default function JobsDetails() {
    const { getJobByCompanyName, jobs } = useJobsContext() as JobsContextType;
    const params = useParams();

    const job = getJobByCompanyName(params.company as string);

    return (
        <section>
            <HeadingImageArticle companyName={job?.company} jobImgURLs={job?.imgUrl} />
            <ThreeSectionDescriptionArticle {...job} />
            <ImageArticle imgURL={job?.imgUrl[1]} />
            <DescriptionArticle achievements={job?.achievements} />
            <NextJobArticle jobs={jobs} currentJob={job?.company} />
        </section>
    )
}