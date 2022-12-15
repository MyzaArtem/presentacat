import React from "react";

interface rectangleProps{
    kWidth: number,
    kHeight: number,
    borderColor: string
}

function Rectangle(props: rectangleProps){
    return(
        <svg width={props.kWidth} height = {props.kHeight}>
            rx = {props.kWidth}
            ry = {props.kHeight}
            stroke = {props.borderColor}
            fill = {props.borderColor}
        </svg>
    );
}

export default Rectangle; 
