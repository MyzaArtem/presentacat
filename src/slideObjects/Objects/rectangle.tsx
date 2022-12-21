import React from "react";
import styles from '../../App.module.css';

interface rectangleProps{
    x: number;
    y: number;
    kWidth: number,
    kHeight: number,
    borderColor: string
}

function Rectangle(props: rectangleProps){
    return(
        <svg className={styles.Object} style = {{top: props.x, left: props.y}} width={props.kWidth} height = {props.kHeight}>
            <rect
                width={props.kWidth}
                height={props.kHeight}
                stroke = {props.borderColor}
                fill = {props.borderColor}
            >
            </rect>
        </svg>
    );
}

export default Rectangle; 
