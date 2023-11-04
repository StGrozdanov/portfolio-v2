export interface CarouselImageData {
    linkTitle: string,
    type: string,
    label: string,
}

export interface CarouselImage {
    imgURL: string,
    data: CarouselImageData,
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

export interface SocialsResponse {
    socialMedia: SocialMedia
}

interface SocialMedia {
    facebook: string,
    linkedIn: string,
    github: string,
    email: string,
}

export interface JobDetails {
    company: string,
    imgUrl: string[],
    title: string,
    started_at: Date,
    ended_at: Date | null,
    concept: string,
    achievements: string[],
    techStack: string[],
}

export interface ProjectsDetails {
    title: string,
    imgUrl: string,
    started_at: Date,
    ended_at: Date | null,
    description: string,
    link: string,
    repository: string,
}