import React from "react";
import styles from '../../App.module.css';

interface triangleProps{
    x: number;
    y: number;
    kWidth: number,
    kHeight: number,
    borderColor: string,
}


function Triangle(props: triangleProps){
    const points = '0,' + props.kHeight + ' ' + props.kWidth / 2 + ', 0 ' + props.kWidth + ',' + props.kHeight; 
    
    return(
        <svg className={styles.Object} style = {{top: props.x, left: props.y}} width={props.kWidth} height = {props.kHeight}>
            <polygon points={points}
            fill={props.borderColor}/>
        </svg>
    );
}

export default Triangle;



