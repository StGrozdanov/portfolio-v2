import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ArticleProps {
    heading: 'Tech Stack' | 'Soft Skills' | 'Hobbies',
    details: string[],
    threshold?: number,
}

export interface IconTypes {
    [type: string]: IconDefinition
}