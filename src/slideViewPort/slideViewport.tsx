import React from 'react';
import styles from './slideviewport.module.css';
import Triangle from '../slideObjects/Objects/triangle';
import { Slide } from '../types';
import getObjects from '../slideObjects/getObjects';


interface SlideViewportProps {
    slides: Slide;
}

function SlideViewport(props: SlideViewportProps) {
    
    return (
        <div
            className={styles.slide}
        >
            {getObjects(props.slides, false)}
        </div>
    );
}


export default SlideViewport;
