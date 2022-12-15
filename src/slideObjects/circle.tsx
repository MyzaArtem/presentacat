import React from "react";

interface circleProps{
    kWidth: number,
    kHeight: number,
    borderColor: string
}

function Circle(props: circleProps){
    return(
        <svg width={props.kWidth} height = {props.kHeight}>
            cx = {props.kWidth/2}
            cy = {props.kHeight/2}
            stroke = {props.borderColor}
            r = {props.kWidth/2}
            fill = {props.borderColor}
        </svg>
    );
}

export default Circle; 