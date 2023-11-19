import { useRef } from 'react';
import styles from './ImageBoard.module.scss';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import FileUpload from '../FileUpload/FileUpload';
import DraggableImage from './modules/DraggableImage';

interface ImageBoardProps {
    imageCollection: string[],
    updateStateHandler: (updatedImageCollection: string[]) => void,
    uploadType: 'uploadCV' | 'updateProjectImage' | 'updateJobImage' | 'addPartners' | 'addCarousel',
    heading: string,
    tip?: string,
    limit?: number,
}

export default function ImageBoard({
    imageCollection,
    uploadType,
    updateStateHandler,
    heading,
    tip,
    limit,
}: ImageBoardProps) {
    const dragItem = useRef<number>(0);
    const draggedOverItem = useRef<number>(0);

    const sortHandler = () => {
        const imageCollectionClone = [...imageCollection];
        const temp = imageCollectionClone[dragItem.current];
        imageCollectionClone[dragItem.current] = imageCollectionClone[draggedOverItem.current];
        imageCollectionClone[draggedOverItem.current] = temp;

        updateStateHandler(imageCollectionClone);
    }

    const deleteHandler = (image: string) => {
        const filteredImages = imageCollection.filter(imageUrl => imageUrl !== image);
        updateStateHandler(filteredImages);
    }

    return (
        <article className={styles['image-container']}>
            <FileUpload
                fontAwesomeIcon={faPlusCircle}
                tip={limit && imageCollection.length >= limit ? 'delete an image first' : tip}
                uploadType={uploadType}
                limited={limit && imageCollection.length >= limit ? true : false}
                fileUploadCallback={updateStateHandler}
            />
            <h3>{heading}</h3>
            <section className={styles.content}>
                {imageCollection.map((imageURL, index) => (
                    <DraggableImage
                        deleteHandler={deleteHandler}
                        dragItem={dragItem}
                        draggedOverItem={draggedOverItem}
                        imageURL={imageURL}
                        index={index}
                        sortHandler={sortHandler}
                    />
                ))}
            </section>
        </article>
    );
}