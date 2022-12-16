import React from 'react';
import styles from './slideMiniature.module.css'
import { Slide } from '../types';
import getObjects from '../slideObjects/getObjects';


interface slideMiniatureProps {
    slides: Slide;
}

function SlideMiniature(props: slideMiniatureProps) {
    
    return (
        <div
            className={styles.slide}
        >
            {getObjects(props.slides, true)}
        </div>
    );
}


export default SlideMiniature;