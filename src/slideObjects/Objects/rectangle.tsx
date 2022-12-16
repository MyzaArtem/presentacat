import React from "react";

interface rectangleProps{
    kWidth: number,
    kHeight: number,
    borderColor: string
}

function Rectangle(props: rectangleProps){
    return(
        <svg width={props.kWidth} height = {props.kHeight}>
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
