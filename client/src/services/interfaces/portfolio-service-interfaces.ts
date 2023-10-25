export interface CarouselImage {
    label: string,
    imgURL: string,
}

export interface BasicInfoResponse {
    email: string,
    cvLink: string,
    aboutMe: string,
    partners: string[],
    carousel: CarouselImage[],
}

export interface AboutMeResponse {
    techStack: string[],
    softSkills: string[],
    hobbies: string[],
}

export interface JobsAndProjectsResponse {
    jobs: JobDetails[],
    projects: ProjectsDetails[],
}

interface JobDetails {
    company: string,
    imgUrl: string,
    title: string,
    started_at: Date,
    ended_at: Date | null,
    achievements: string[],
    techStack: string[],
}

interface ProjectsDetails {
    title: string,
    imgUrl: string,
    started_at: Date,
    ended_at: Date | null,
    description: string,
    link: string,
    repository: string,
}