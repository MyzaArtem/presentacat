import React from "react";
import styles from '../../App.module.css';

interface textProps{
    x: number;
    y: number;
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    fontWeight: number,
    underline: boolean,
    data: string,
    kWidth: number,
    kHeight: number,
    key: number,
}

function TextObject(props: textProps){
    return(
        <textarea className={styles.Object} style={{
            top: props.x, 
            left: props.y,
            fontFamily: props.fontFamily,
            color: props.fontColor,
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            width: props.kWidth,
            height: props.kHeight,
            textDecoration: props.underline ? 'underline' : '',
            overflow: 'hidden'
        }}>
            {props.data}
        </textarea>
    );
}

export default TextObject; 
