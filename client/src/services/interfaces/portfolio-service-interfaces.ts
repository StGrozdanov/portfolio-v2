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