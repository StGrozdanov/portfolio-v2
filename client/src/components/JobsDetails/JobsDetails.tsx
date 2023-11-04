import { useParams } from "react-router-dom";
import { useJobsContext } from "../../hooks/useJobsContext"
import { JobsContextType } from "../../contexts/JobsContext";
import HeadingImageArticle from "./modules/HeadingImageArticle/HeadingImageArticle";
import ThreeSectionDescriptionArticle from "./modules/ThreeSectionDescriptionArticle/ThreeSectionDescriptionArticle";
import ImageArticle from "./modules/ImageArticle/ImageArticle";
import DescriptionArticle from "./modules/DescriptionArticle/DescriptionArticle";
import NextJobArticle from "./modules/NextJobArticle/NextJobArticle";

export default function JobsDetails() {
    const { getJobByCompanyName, jobs } = useJobsContext() as JobsContextType;
    const params = useParams();

    const job = getJobByCompanyName(params.company as string);

    return (
        <section>
            <HeadingImageArticle jobImgURL={job?.imgUrl[0]} />
            <ThreeSectionDescriptionArticle {...job} />
            <ImageArticle imgURL={job?.imgUrl[1]} />
            <DescriptionArticle achievements={job?.achievements} />
            <NextJobArticle jobs={jobs} currentJob={job?.company} />
        </section>
    )
}