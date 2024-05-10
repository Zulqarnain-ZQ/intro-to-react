import { useState, useCallback } from "react";
import styles from './Carousel.module.css';
/**
 * Render a carousel wit( prev and next button
 */
export function Carousel({images}){
    const [currentIndex, setCurrentIndex] = useState(0);

    const onPrevious = useCallback(() =>  setCurrentIndex(Math.max(currentIndex-1, 0))
    , [currentIndex]);

    const onNext = useCallback(() =>  setCurrentIndex(Math.min(currentIndex+1, images.length-1))
    , [currentIndex,images.length]);


    return <div className={styles.container} >
        <button onClick={onPrevious}>Previous</button>

        <img className={styles.img} src={images[currentIndex]} alt="Img" />
        <button onNext={onNext}>Next</button>
    </div>
}