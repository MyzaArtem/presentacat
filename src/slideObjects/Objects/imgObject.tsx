import React from "react";
import styles from '../../App.module.css';

interface imgProps{
    x: number;
    y: number;
    kWidth: number,
    kHeight: number,
    src: string
}

function ImgObject(props: imgProps){
    return(
        <img 
            className={styles.Object}
            style = {{
                top: props.x, 
                left: props.y,
                width: props.kWidth,
                height: props.kHeight
            }}
            src={props.src} 
            alt=""
            />
    );
}

export default ImgObject; 
